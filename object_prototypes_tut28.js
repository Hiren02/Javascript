console.log('This is prototypes');

function obj(givenName){
    this.name= givenName;
}

obj.prototype.getName = function(){
    return this.name;
}

let obj2 = new obj("Hiren Chavda");
console.log(obj2);