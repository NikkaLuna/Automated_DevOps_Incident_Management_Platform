from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import (
    IncidentViewSet, IncidentLogViewSet, ResourceViewSet, ExampleModelViewSet,
    ItemViewSet, TicketViewSet, CategoryViewSet, LogViewSet
)
from django.contrib.auth import views as auth_views

router = DefaultRouter()
router.register(r'incidents', IncidentViewSet)
router.register(r'logs', IncidentLogViewSet)
router.register(r'resources', ResourceViewSet)
router.register(r'examplemodels', ExampleModelViewSet)
router.register(r'items', ItemViewSet)
router.register(r'tickets', TicketViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'logs', LogViewSet)

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    path('create-resource/', views.create_resource, name='create_resource'),
    path('update-resource/', views.update_resource, name='update_resource'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('incidents/<int:pk>/escalate/', views.escalate_incident, name='escalate-incident'),
    path('incidents/<int:pk>/resolve/', views.resolve_incident, name='resolve-incident'),
    path('api/', include(router.urls)),
]
