
from django.urls import path, include
from . import views
from .api_urls import router
from .views import index, create_resource, update_resource

urlpatterns = [

    path('', views.index, name='index'),
    path('api/', include(router.urls)),
    path('home/', views.home, name='home'),
    path('create-resource/', views.create_resource, name='create_resource'),
    path('update-resource/', views.update_resource, name='update_resource'),
]
