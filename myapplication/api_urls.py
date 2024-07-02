from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    IncidentViewSet, IncidentLogViewSet, ResourceViewSet, ExampleModelViewSet,
    ItemViewSet, TicketViewSet, CategoryViewSet, LogViewSet
)

router = DefaultRouter()
router.register(r'incidents', IncidentViewSet)
router.register(r'incident-logs', IncidentLogViewSet)
router.register(r'resources', ResourceViewSet)
router.register(r'examplemodels', ExampleModelViewSet)
router.register(r'items', ItemViewSet)
router.register(r'tickets', TicketViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'logs', LogViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
