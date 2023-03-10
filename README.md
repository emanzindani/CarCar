# CarCar

Team:
* Alana Torrez - Service microservice
* Eman Zindani - Sales microservice/inventory: automobile list, automobile form and vehicle model form

## Design

## Service microservice

The Service microservice will have three models within its bounded context:

 1. AutomobileVO-- will poll the Automobile model on the Inventory service for the vehicle vin. The vin will then be used in appointment objects
 (i.e. new appointment form results) to keep track of which cars are associated with service appointments.
 Frontend interaction:
 Inventory users will add new vins to automobiles through the "Create an Automobile" form.

 2. Technician-- the 'first_name' attribute is associated with Appointment objects in the Service microservice. When a new appointment is created, the
 user is able to attach the first name of the technician to the appointment.
 Frontend interaction:
 Service users add new technicians through the "New technician" form.

 3. Appointment-- has the following attributes on its model: appointment_date, appointment_time, customer_name, technician, service_reason, and automobile.
 The autommobile attribute is a foreign key to the AutomobileVO, which contains the attributes 'href' and 'vin'. Vin mirrors the corresponding attribute
 on the Inventory service's Automobile model. Vin is also used as a search key on a service history view.
 Frontend interaction:
 Service users can add appointments through the "New appointment" form, and can see a list of appointments through "List of Appointments". They can also see service appointments for a particular vin through "Service History".

Explain your models and integration with the inventory
microservice, here.

## Sales microservice
The sales microservice consists of four models which include:
    1. AutomobileVO: is a vlaue object that we are getting by polling from the inventory microservice.
    2. SalesPerson: consists of the employee's name and number
    3. Customer: consists of person's name, address and number
    4. SalesRecord: has three different foreign keys: customer, salesperson and automobile as well as price.
Three different folders were created in insomnia to get the backend working using the 8090 port alongside the autombile from the 8100 port.
