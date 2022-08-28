console.log('This is the charater set');

//  Regular Expression:
    // Basic functions
    // Metacharacters
    // Character sets

// character sets- we use[]
let rege = /h[a-z]ren/;// can be any character from a to z
rege = /h[djy]ren/; // can be d,j,y 
rege = /h[^djy]ren/; // not djy
rege = /h[a-zA-Z]re[yu0-9]/; 
// const str = 'hiren chavda';

// Quantifiers- we use {}
rege = /hir{2}n/; // e can occur exactly 2 times  
rege = /hir{0,2}n/; // e can occur exactly 0 to 2 times  
str = "hiren chavda "
// Grouping - we use paranthesis for groupings ()
rege = /(har){2}([0-9]r){3}/; 
str = " harhar1r4r5r bhai"


let result = rege.exec(str);
console.log("The result from exec is "+ result);

if (rege.test(str)) {
    console.log(`The string ${str} matches the expression ${rege.source}`);
    
}
else {
    console.log(`The string ${str} does not match the expression ${rege.source}`);
}
