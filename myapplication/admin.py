from django.contrib import admin
from .models import ExampleModel, Item, Resource, Category, Incident, IncidentLog, Ticket, Log

# Registering the models without using decorators to avoid duplicate registrations
admin.site.register(Resource)
admin.site.register(ExampleModel)
admin.site.register(Item)
admin.site.register(Category)
admin.site.register(Ticket)
admin.site.register(Log)

# Registering Incident and IncidentLog with detailed admin configurations
@admin.register(Incident)
class IncidentAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'status', 'severity', 'category', 'created_at', 'updated_at')
    list_filter = ('status', 'severity', 'category')
    search_fields = ('title', 'description')

@admin.register(IncidentLog)
class IncidentLogAdmin(admin.ModelAdmin):
    list_display = ('incident', 'action', 'timestamp')
    list_filter = ('incident', 'timestamp')
    search_fields = ('incident__title', 'action')
