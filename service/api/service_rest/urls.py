from django.urls import path

from .views import api_appointments, api_technicians, api_delete_appointment

urlpatterns = [
    path("appointments/", api_appointments, name="api_appointments"),
    path("technicians/", api_technicians, name="api_technicians"),
    path("appointments/<int:id>/", api_delete_appointment, name="api_delete_appointment"),
]
