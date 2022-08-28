console.log("This is exercise1");
let a = document;
// a = document.all
a = document.links;

let b = "javascript";

Array.from(a).forEach(function(element){
    if(String(element).includes(b)){
        console.log(element);
    }
});

console.log(a)