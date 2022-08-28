console.log('This is shorthand characters classes');

// Characters classes
let rege = /\war/;  //word character - _ or alphabet or number
str = " harhar1r4r5r bhai"


let result = rege.exec(str);
console.log("The result from exec is "+ result);

if (rege.test(str)) {
    console.log(`The string ${str} matches the expression ${rege.source}`);
    
}
else {
    console.log(`The string ${str} does not match the expression ${rege.source}`);
}
