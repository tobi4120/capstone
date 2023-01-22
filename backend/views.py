from django.shortcuts import render
from .models import *

from rest_framework import views, permissions, generics
from rest_framework.response import Response
from .serializers import *

from knox.models import AuthToken

import requests
from bs4 import BeautifulSoup
from django.http import HttpResponse
import json
import os

# JobData API
class JobPostsView(views.APIView):

    def get(self, request):
        settings_dir = os.path.dirname(__file__)
        PROJECT_ROOT = os.path.abspath(os.path.dirname(settings_dir))
        FOLDER = os.path.join(PROJECT_ROOT, 'backend/')
        FILE = FOLDER + 'sample_data.json'

        f = open(FILE)
        response = json.load(f)

        yourdata = response['data']
        results = JobPostsSerializer(yourdata, many=True).data
        return Response(results)

# Register API 
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

# Get User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user