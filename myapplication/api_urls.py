from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import ExampleModelViewSet, ItemViewSet, TicketViewSet, CategoryViewSet, LogViewSet, ResourceViewSet, IncidentViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'resources', ResourceViewSet)
router.register(r'examplemodels', ExampleModelViewSet)
router.register(r'items', ItemViewSet)
router.register(r'tickets', TicketViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'logs', LogViewSet)
router.register(r'incidents', IncidentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
