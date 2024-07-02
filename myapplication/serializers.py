from rest_framework import serializers
from .models import Incident, IncidentLog, ExampleModel, Item, Ticket, Category, Log, Resource


class IncidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incident
        fields = '__all__'


class IncidentLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = IncidentLog
        fields = '__all__'


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = '__all__'


class ExampleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExampleModel
        fields = '__all__'


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'

    def validate(self, data):
        # Add custom validation logic here
        if not data['title']:
            raise serializers.ValidationError("Title is required")
        return data




class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class LogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Log
        fields = '__all__'
