console.log('This is regular expression');

let reg =/Hiren/;  // This is regular expression literal in js
 reg =/Hiren/g;
// // g  means global 
// // here g are involved then all the match are show otherwise only fisrt match can be show 
// reg =/Hiren/i;  // i means case insensitive

// console.log(reg);
// console.log(reg.source);

let s = "This is great Hiren and great web developer is Hiren";
// Function to match expression
// 1. exec()- This is function will return an array for match or null for no match
let result = reg.exec(s);
// console.log(result);  
// console.log(result.index);
// console.log(result.input);
result = reg.exec(s);
// console.log(result); // we can use multiple exec with global flag

// 2. test()- Returns true or false

let result2 = reg.test(s)
// console.log(result2); // This will only print true if the "reg" is there in the string "s"

// 3. match() - It will return an array of results or null

// let result3 = reg.match(s)// this is wrong
let result3 = s.match(reg)// this is right
console.log(result3);

// 4. search() - Returns index of first match else -1

let result4 = s.search(reg)
console.log(result4);

// 5. replace()- Returns new replaced string with all the replacements ( if no flag is given , only first match will be replaced)

let result5 = s.replace(reg, "Vasu");
console.log(result5);

