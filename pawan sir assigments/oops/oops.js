// Base class: Vehicle
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Method to display vehicle details
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}

// Derived class: Car (inherits from Vehicle)
class Car extends Vehicle {
    constructor(brand, model, year, fuelType) {
        super(brand, model, year);  // Call parent constructor
        this.fuelType = fuelType;
    }

    // Method to display car-specific details
    displayCarInfo() {
        this.displayInfo();  // Call parent method
        console.log(`Fuel Type: ${this.fuelType}`);
    }
}

// Creating an object of Car class
let myCar = new Car("Toyota", "Corolla", 2020, "Petrol");

// Calling the method to display details
myCar.displayCarInfo();
