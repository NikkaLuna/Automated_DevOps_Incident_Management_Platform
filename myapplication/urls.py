from django.urls import path, include
from .api_urls import router
from .views import index

urlpatterns = [
    path('', index, name='home'),  # Serve the index.html at the root URL
    path('api/', include(router.urls)),
]

