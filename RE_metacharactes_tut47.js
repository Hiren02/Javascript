console.log('This is metacharaters of regular expression')

let rege = /hiren/;

// some metacharacter symbols

rege = /^hir/; // ^ means string starts with
rege = /en$/; // $ means string ends with
rege = /h.iren/;  // matches any one character
rege= /h*iren/; // matches any 0 or more characters
rege= /hi?renc?/; // ? after character means that characters is optional 
rege =  /h\*ren/; // * are printing in string

let str = "hiren is hiren";

let result = rege.exec(str);
console.log("The result from exec is "+ result);

if (rege.test(str)) {
    console.log(`The string ${str} matches the expression ${rege.source}`);
    
}
else {
    console.log(`The string ${str} does not match the expression ${rege.source}`);
}


