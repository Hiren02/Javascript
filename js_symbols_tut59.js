console.log('This is js symbols');

// Symbbols: it is primative
// use for gererating a new primative and unique
const sym1 = Symbol('my identifier');
const sym2 = Symbol('my identifier');
// console.log(sym1);
// console.log(typeof sym1);

console.log(sym1 === sym2);

const k1 = Symbol();
const k2 = Symbol();

myObj = {}
myObj[k1]= 'Hiren';
myObj[k2] = "Manan";
myObj["name"]= "Good boy"
// console.log(myObj);
// console.log(myObj[k1]);
// console.log(myObj[k2]);


// Symbols are ingored in for-in loop
for (key in myObj){
    console.log(key,myObj[key]);
    
}

console.log(JSON.stringify(myObj));
