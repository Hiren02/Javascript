console.log('This is for-of loop and for-in loop ');

// ********** For-in loop********

// ITERATING AN OBJECT
 let obj = {
    name: "Hiren",
    languauge:"Javascript",
    hobbies:"web developer"
}

// Iterating an object using for-in loop

for ( let key in obj){
    console.log(obj[key]);
    
}

// ITERSTING A STRING
// we can use for-in eith strings to loop through all the characters

myString = "This is my string";
for(let char in myString){
    console.log(myString[char]);
    
}


// ********** For-of loop*************

let people = ["Hiren","Manan","Vasu","mehul"];

for( let name of people){
    console.log(name);
    
}

for( let name of myString){
    console.log(name);
    
}