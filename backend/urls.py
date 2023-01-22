from django.urls import include, path
from . import views
from rest_framework import routers
from knox import views as knox_views

router = routers.DefaultRouter()

urlpatterns = [
    path("api/", include(router.urls)),
    path("userAPI", views.UserAPI.as_view()),
    path("registerAPI", views.RegisterAPI.as_view()),
    path("loginAPI", views.LoginAPI.as_view()),
    path("logoutAPI", knox_views.LogoutView.as_view(), name='knox_logout'),
    path("auth", include('knox.urls')),
    path("job-posts", views.JobPostsView.as_view())
]