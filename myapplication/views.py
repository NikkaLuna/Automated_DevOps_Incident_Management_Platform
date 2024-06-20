from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Resource, ExampleModel, Item, Ticket, Category, Log
from .serializers import ExampleModelSerializer, ItemSerializer, ResourceSerializer
from .serializers import TicketSerializer, CategorySerializer, LogSerializer


def index(request):
    return render(request, 'index.html')


def home(request):
    return HttpResponse("Welcome to the Home Page")


class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    permission_classes = [AllowAny]


class ExampleModelViewSet(viewsets.ModelViewSet):
    queryset = ExampleModel.objects.all()
    serializer_class = ExampleModelSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [AllowAny]


class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class LogViewSet(viewsets.ModelViewSet):
    queryset = Log.objects.all()
    serializer_class = LogSerializer


@csrf_exempt
def create_resource(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        type = request.POST.get('type')
        resource = Resource.objects.create(name=name, type=type)
        return JsonResponse({'id': resource.id, 'name': resource.name, 'type': resource.type})


@csrf_exempt
def update_resource(request):
    if request.method == 'POST':
        resource_id = request.POST.get('id')
        name = request.POST.get('name')
        type = request.POST.get('type')
        resource = Resource.objects.get(id=resource_id)
        resource.name = name
        resource.type = type
        resource.save()
        return JsonResponse({'id': resource.id, 'name': resource.name, 'type': resource.type})
