from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, filters
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from .models import Resource, ExampleModel, Item, Ticket, Category, Log, Incident, IncidentLog
from .serializers import (
    ExampleModelSerializer, ItemSerializer, ResourceSerializer, IncidentSerializer, IncidentLogSerializer,
    TicketSerializer, CategorySerializer, LogSerializer
)


def index(request):
    return render(request, 'base.html')


class IncidentViewSet(viewsets.ModelViewSet):
    queryset = Incident.objects.all()
    serializer_class = IncidentSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['status']

    def get_queryset(self):
        queryset = super().get_queryset()
        status = self.request.query_params.get('status')
        if status:
            queryset = queryset.filter(status=status)
        return queryset


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
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # Add logging to debug request data
        print("Creating ticket with data:", serializer.validated_data)
        serializer.save()


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class LogViewSet(viewsets.ModelViewSet):
    queryset = Log.objects.all()
    serializer_class = LogSerializer


@api_view(['POST'])
def escalate_incident(request, pk):
    try:
        incident = Incident.objects.get(pk=pk)
        incident.status = 'Escalated'
        incident.save()
        serializer = IncidentSerializer(incident)
        return Response(serializer.data)
    except Incident.DoesNotExist:
        return Response({'error': 'Incident not found'}, status=404)


@api_view(['POST'])
def resolve_incident(request, pk):
    try:
        incident = Incident.objects.get(pk=pk)
        incident.status = 'Resolved'
        incident.save()
        serializer = IncidentSerializer(incident)
        return Response(serializer.data)
    except Incident.DoesNotExist:
        return Response({'error': 'Incident not found'}, status=404)


def index(request):
    return render(request, 'index.html')


def home(request):
    return HttpResponse("Welcome to the Home Page")


@csrf_exempt
def create_resource(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        resource_type = request.POST.get('type')
        resource = Resource.objects.create(name=name, type=resource_type)
        return JsonResponse({'id': resource.id, 'name': resource.name, 'type': resource.type})
    return HttpResponse(status=405)


@csrf_exempt
def update_resource(request):
    if request.method == 'POST':
        resource_id = request.POST.get('id')
        name = request.POST.get('name')
        resource_type = request.POST.get('type')
        try:
            resource = Resource.objects.get(id=resource_id)
            resource.name = name
            resource.type = resource_type
            resource.save()
            return JsonResponse({'id': resource.id, 'name': resource.name, 'type': resource.type})
        except Resource.DoesNotExist:
            return JsonResponse({'error': 'Resource not found'}, status=404)
    return HttpResponse(status=405)
