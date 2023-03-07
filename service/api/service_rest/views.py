from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import Appointment, AutomobileVO, Technician
from common.json import ModelEncoder
# Create your views here.


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "import_href"]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "appointment_date",
        "appointment_time",
        "customer_name",
        "service_reason",
        "technician",
    ]
    encoders = {
        "autos": AutomobileVOEncoder(),
        # "technicians": TechnicianEncoder(),
    }
    def get_extra_data(self, o):
        return {
            "automobile": o.automobile.vin
        }
    # def get_extra_data(self, o):
    #     return {
    #         "technician": o.technician.employee_id
    #     }





@require_http_methods(["GET", "POST"])
def api_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        print("content", content)
        try:
            href = content["automobile"]
            print("href", href)
            #automobile = AutomobileVO.objects.get(id=content["automobile"]) # not sure about this
            automobile = AutomobileVO.objects.get(import_href=href) # not sure about this
            content["automobile"] = automobile # not sure about this
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid auto id"},
                status = 400
            )
        appointments = Appointment.objects.create(**content)
        return JsonResponse(
            appointments,
            encoder=AppointmentEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_delete_appointment(request, id):
     if request.method == "DELETE":
            count, _ = Appointment.objects.filter(id=id).delete()
            return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the technician"}
            )
            response.status_code = 400
            return response
