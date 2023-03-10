from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "import_href"]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
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

    }
    def get_extra_data(self, o):
        return {
        "automobile": o.automobile.vin
        }
