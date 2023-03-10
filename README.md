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
The sales microservice consists of four models:

1. AutomobileVO: is a value object that we created and are accessing it's information from the inventory microservice through polling. The vin is being used to keep track of each automobile sale done by the sale's person.
2. SalesPerson: is created in a way in which you can access or create through the employee's name and number
3. Customer: consists of a person's name, address and number
4. SalesRecord: is accessing three different foreign keys which include: customer, salesperson and automobile. It also has a category to input and access price.

Backend:
1. The first step was to setup all endpoints for manufacturers, vehicle models and automobiles that were provided for us and after finishing the models and views I was able to set up the endpoints for customer, salesrecords and salesperon. The port used was the 8090 port and 8100 to access automobiles.

Frontend:
1. Consists of three forms: record a sale, new customer and new salesperson
2. Also consists of two lists which include: list of cars sold and salesperson records that includes filter functionality.
