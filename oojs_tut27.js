console.log('This is object oriented javascript');

// object literal for creating objects

let car = {
    name:' Swift',
    topSpeed:150,
    run:function(){
        console.log("car is running...");
    }
}

// creating a constructor for cars

function GeneralCar(givenName,givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    } 
    this.analyze = function(){
        console.log(`This car is slower by ${200 - this.topSpeed} km/H than marcedes`);
    }
}
car1 = new GeneralCar('vitara',150);

console.log(car1);