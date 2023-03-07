# CarCar

Team:

* Person 1 - Which microservice?
* Eman Zindani - Sales microservice/inventory

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice
The sales microservice consists of four models which include:
    1. AutomobileVO: is a vlaue object that we are getting by polling from the inventory microservice.
    2. SalesPerson: consists of the employee's name and number
    3. Customer: consists of person's name, address and number
    4. SalesRecord: has three different foreign keys: customer, salesperson and automobile as well as price.
Three different folders were created in insomnia to get the backend working using the 8090 port alongside the autombile from the 8100 port.
