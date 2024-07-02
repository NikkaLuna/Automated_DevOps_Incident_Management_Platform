from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    path('', views.index, name='index'),
    path('create-resource/', views.create_resource, name='create_resource'),
    path('update-resource/', views.update_resource, name='update_resource'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('incidents/<int:pk>/escalate/', views.escalate_incident, name='escalate-incident'),
    path('incidents/<int:pk>/resolve/', views.resolve_incident, name='resolve-incident'),
]
