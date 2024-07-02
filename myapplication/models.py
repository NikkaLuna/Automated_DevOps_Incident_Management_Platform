from django.db import models


# Resource model
class Resource(models.Model):
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=200)

    def __str__(self):
        return self.name


# Example model
class ExampleModel(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


# Item model
class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name


# Category model
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


# Incident model with status and severity choices
class Incident(models.Model):
    STATUS_CHOICES = [
        ('Open', 'Open'),
        ('Resolved', 'Resolved'),
        ('Escalated', 'Escalated'),
    ]
    SEVERITY_CHOICES = [
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()
    status = models.CharField(max_length=50, choices=STATUS_CHOICES)
    severity = models.CharField(max_length=50, choices=SEVERITY_CHOICES)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


# IncidentLog model linking to Incident
class IncidentLog(models.Model):
    incident = models.ForeignKey(Incident, on_delete=models.CASCADE)
    action = models.CharField(max_length=200)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.incident.title} - {self.action} at {self.timestamp}'


# Ticket model with category and status
class Ticket(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    status = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


# Log model linking to Ticket
class Log(models.Model):
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)
    action = models.CharField(max_length=200)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.ticket.title} - {self.action} at {self.timestamp}'
