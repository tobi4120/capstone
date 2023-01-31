from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils import timezone

class MyAccountManager(BaseUserManager):

    def create_user(self, email, first_name, last_name, password=None):
        if not email:
            raise ValueError("Users must have an email")
        
        if not first_name:
            raise ValueError("Users must have a first name")
            
        if not last_name:
            raise ValueError("Users must have a last name")

        user = self.model(
            email = self.normalize_email(email),
            first_name = first_name,
            last_name = last_name,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user
        
    def create_superuser(self, email, first_name, last_name, password):
        user = self.create_user (
            email = self.normalize_email(email),
            first_name = first_name,
            last_name = last_name,
            password = password,
        )

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True

        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(max_length=64, unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = MyAccountManager()

    def __str__(self):
        return f"{self.email}"
    
    def has_perm(self, perm, obj=None):
        return self.is_admin
    
    def has_module_perms(self, app_label):
        return True

class JobsAppliedTo(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE)
    employer_name = models.CharField(max_length=2000)
    employer_logo = models.CharField(max_length=2000, null=True, blank=True)
    employer_website = models.CharField(max_length=2000, null=True, blank=True)
    job_publisher = models.CharField(max_length=2000, null=True, blank=True)
    job_id = models.CharField(max_length=2000, null=True, blank=True, unique=True)
    job_employment_type = models.CharField(max_length=2000, null=True, blank=True)
    job_title = models.CharField(max_length=2000, null=True, blank=True)
    job_apply_link = models.CharField(max_length=2000, null=True, blank=True)
    job_is_remote = models.BooleanField(null=True, blank=True)
    job_posted_at_datetime_utc = models.CharField(max_length=2000, null=True, blank=True)
    job_city = models.CharField(max_length=2000, null=True, blank=True)
    job_state = models.CharField(max_length=2000, null=True, blank=True)
    job_country = models.CharField(max_length=2000, null=True, blank=True)
    job_min_salary = models.IntegerField(null=True, blank=True)
    job_max_salary = models.IntegerField(null=True, blank=True)
    receivedInterview = models.BooleanField(default=False)
    receivedOffer = models.BooleanField(default=False)
