console.log('This is Arrows function');

// Creating a regular function
// const hiren = function(){
//     console.log('This is the best personen ever..');
// }
// hiren();

// converting it to an Arrows function

const hiren = ()=>{
    console.log('This is the best personen ever..');
}
hiren();

// function returning something
// const greet = function(){
//     return "Hiren Chavda"
// }
// console.log( greet());

// one liners do not reqiured braces/return
// one line will automatically return
// const greet = ()=> "Hiren Chavda";

// object syntext
// const greet = ()=> ({name:'Hiren'})


// single parameters do not need parenthesis
// but you will have to put parenthesis is therer are multiple parameters
const greet = name => "Good morning " + name;
console.log( greet('Hiren'));

