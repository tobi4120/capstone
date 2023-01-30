from rest_framework import serializers
from .models import *
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name')

class RegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['email'], validated_data['first_name'], validated_data['last_name'],
        validated_data['password'])

        return user

class LoginSerializer(serializers.Serializer):
    
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")

class JobPostsSerializer(serializers.Serializer):
    employer_name = serializers.CharField()
    employer_logo = serializers.CharField()
    employer_website = serializers.CharField()
    job_publisher = serializers.CharField()
    job_id = serializers.CharField()
    job_employment_type = serializers.CharField()
    job_title = serializers.CharField()
    job_apply_link = serializers.CharField()
    job_description = serializers.CharField()
    job_is_remote = serializers.BooleanField()
    job_posted_at_datetime_utc = serializers.CharField()
    job_city = serializers.CharField()
    job_state = serializers.CharField()
    job_country = serializers.CharField()
    job_required_experience = serializers.DictField()
    job_required_skills = serializers.ListField()
    job_required_education = serializers.DictField()
    job_min_salary = serializers.IntegerField()
    job_max_salary = serializers.IntegerField()
    job_highlights = serializers.DictField()

class JobsAppliedToSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobsAppliedTo
        fields = '__all__'