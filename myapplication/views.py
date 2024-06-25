from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import Resource, ExampleModel, Item, Ticket, Category, Log, Incident, IncidentLog
from .serializers import (
    ExampleModelSerializer, ItemSerializer, ResourceSerializer, IncidentSerializer, IncidentLogSerializer,
    TicketSerializer, CategorySerializer, LogSerializer
)


class IncidentViewSet(viewsets.ModelViewSet):
    queryset = Incident.objects.all()
    serializer_class = IncidentSerializer


class IncidentLogViewSet(viewsets.ModelViewSet):
    queryset = IncidentLog.objects.all()
    serializer_class = IncidentLogSerializer


class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer


class ExampleModelViewSet(viewsets.ModelViewSet):
    queryset = ExampleModel.objects.all()
    serializer_class = ExampleModelSerializer


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class TicketViewSet(viewsets.ModelViewSet):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class LogViewSet(viewsets.ModelViewSet):
    queryset = Log.objects.all()
    serializer_class = LogSerializer


@api_view(['POST'])
def escalate_incident(request, pk):
    incident = Incident.objects.get(pk=pk)
    incident.status = 'Escalated'
    incident.save()
    serializer = IncidentSerializer(incident)
    return Response(serializer.data)


@api_view(['POST'])
def resolve_incident(request, pk):
    incident = Incident.objects.get(pk=pk)
    incident.status = 'Resolved'
    incident.save()
    serializer = IncidentSerializer(incident)
    return Response(serializer.data)


def index(request):
    return render(request, 'index.html')


def home(request):
    return HttpResponse("Welcome to the Home Page")


@csrf_exempt
def create_resource(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        resource_type = request.POST.get('type')  # Renamed variable
        resource = Resource.objects.create(name=name, type=resource_type)
        return JsonResponse({'id': resource.id, 'name': resource.name, 'type': resource.type})


@csrf_exempt
def update_resource(request):
    if request.method == 'POST':
        resource_id = request.POST.get('id')
        name = request.POST.get('name')
        resource_type = request.POST.get('type')  # Renamed variable
        resource = Resource.objects.get(id=resource_id)
        resource.name = name
        resource.type = resource_type
        resource.save()
        return JsonResponse({'id': resource.id, 'name': resource.name, 'type': resource.type})
