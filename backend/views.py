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
        # API docs: https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch

        # Get params
        params = {
            'query': self.request.query_params.get('query'),
            'date_posted': self.request.query_params.get('date_posted'),
            'remote_jobs_only': self.request.query_params.get('remote_jobs_only'),
            'employment_types': self.request.query_params.get('employment_types'),
            'job_requirements': self.request.query_params.get('job_requirements'),
            'categories': self.request.query_params.get('categories'),
            'company_types': self.request.query_params.get('company_types')
        }

        # Call API
        url = "https://jsearch.p.rapidapi.com/search"

        headers = {
            "X-RapidAPI-Key": "d8dbd3e067msh204f5fbb69e2009p1ee77bjsn8b7ba668f743",
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
        }

        # response = requests.request("GET", url, headers=headers, params=params)
        # response = response.json()

        # Loading data from dummy file (need to remove later)
        settings_dir = os.path.dirname(__file__)
        PROJECT_ROOT = os.path.abspath(os.path.dirname(settings_dir))
        FOLDER = os.path.join(PROJECT_ROOT, 'backend/')
        FILE = FOLDER + 'sample_data.json'

        f = open(FILE)
        response = json.load(f)

        if response['data']:
            data = response['data']
            results = JobPostsSerializer(data, many=True).data
            return Response(results)

        return None

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