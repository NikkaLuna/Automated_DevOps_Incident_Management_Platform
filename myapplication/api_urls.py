from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExampleModelViewSet, ItemViewSet

router = DefaultRouter()
router.register(r'examplemodels', ExampleModelViewSet)
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
