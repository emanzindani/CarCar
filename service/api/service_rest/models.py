from django.db import models


class AutomobileVO(models.Model):
      import_href = models.CharField(max_length=200, unique=True)
      vin = models.CharField(max_length=17, unique=True)



class Technician(models.Model):
      first_name = models.CharField(max_length=30)
      last_name = models.CharField(max_length=30)
      employee_id = models.PositiveIntegerField(unique=True)


class Appointment(models.Model):
      appointment_date = models.DateTimeField()
      appointment_time = models.CharField(max_length=10)
      customer_name = models.CharField(max_length=60)
      technician = models.CharField(max_length=60, null=True)
      service_reason = models.TextField()
      automobile = models.ForeignKey(
            AutomobileVO,
            related_name="appointments",
            on_delete=models.PROTECT
      )
