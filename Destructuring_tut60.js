console.log('This is destructuring');

let a,b;
[a,b]=[23,345];
console.log(a,b);


[a,b,c,...d] =[1,2,3,4,5,6,7,8,9,10,11,12,13];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Arrays destructuring
({a,b,c,...d} = {a:23,b:12,c:45,d:24,e:67})
// console.log(a,b,c,d);


const fruits = ['Apple','Banana','mangoes '];
[a, b, c]  = fruits;
console.log(a, b, c);


// Object destructuring

const laptop= {
    model:'asus',
    age:'34 days',
    gender:'Male',
    net:'123456',
    start: function(){
        console.log('Started');
    }
}

const{model , age, gender,net,start} = laptop
console.log(model , age, gender,net,start);
start(); 
