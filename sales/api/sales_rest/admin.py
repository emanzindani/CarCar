from django.contrib import admin
from .models import AutomobileVO, Customer, SalesPerson, SalesRecord

# Register your models here.
admin.site.register(AutomobileVO)
admin.site.register(Customer)
admin.site.register(SalesPerson)
admin.site.register(SalesRecord)
