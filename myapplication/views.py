from rest_framework import viewsets
from .models import ExampleModel, Item
from .serializers import ExampleModelSerializer, ItemSerializer
from rest_framework.permissions import AllowAny
from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def home(request):
    return HttpResponse("Welcome to the Home Page")


class ExampleModelViewSet(viewsets.ModelViewSet):
    queryset = ExampleModel.objects.all()
    serializer_class = ExampleModelSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [AllowAny]
