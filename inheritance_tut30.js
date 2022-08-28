 console.log("this is inheritance object");

const proto = {
    slogan:function(){
        return `This company is the best`;
    },
    
    chaangeName:function(newName){
        this.name = newName;
    }
    
}

// this creates vasu object

let vasu = object.creates(proto);
vasu.name = "Hiren";
vasu.role = "Programmer";
// vasu.chaangeName("Hiren chavda");
console.log(vasu);



 // employee constructor

 function Employee(name,salary, experience){
     this.name = name;
     this.salary = salary;
     this.experience = experience;

 }

 // slogan
 Employee.prototype.slogan = function(){
     return ` This company is the best. Regards,${this.name} `;
 }

 let vasuObj = new Employee("Hiren",3456789,1);
 console.log(vasuObj.slogan());

 // programmer constructor

 function Programmer(name,salary, experience,language){
     Employee.call(this,name,salary,experience);
     this.language = language;
 }

 //inherit the prototypes
 Programmer.prototype = Object.create(Employee.prototype);

 // manually set the constructor

 Programmer.prototype.constructor = Programmer;

let hiren = new Programmer("Hiren",345678,2,"JavaScript");
console.log(hiren);
