from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('myapplication.api_urls')),  # Separate API URLs
    path('', include('myapplication.urls')),  # Root URL
]

