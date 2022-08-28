console.log('This is the classes of ES6');

class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan(){
        return ` i am ${this.name} and my experience of this field is ${this.experience} years.this company is the best for ${this.division} division`;
    }

    joiningYear(){
        return  2021-this.experience;
    }
    static add(a,b){
        return a + b;
    }
}
hiren = new Employee("Hiren",2,"IT");
console.log(hiren);
console.log(hiren.joiningYear());
console.log(hiren.slogan());
// console.log(Employee.add(23,34));

class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,language,github){
    super(givenName,givenExperience,givenDivision);
    this.language = language;
    this.github = github;
    }
    favLanguage(){
        return `${this.language} is your favrite language`;
    }
    static mul(a,b){
        return a*b;
    }
}
hiren1 = new Programmer("Hiren",2,"IT",'python','hiren01');
console.log(hiren1);
console.log(hiren1.favLanguage());
