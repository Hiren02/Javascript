console.log('This is sets');

// Set can use for storing unique values
// using Set , values can not be repeat

const mySet = new Set();

//Adding values  to this set
mySet.add('this');
mySet.add('My name');
mySet.add('that');
mySet.add(234);
mySet.add(true);
mySet.add(false);
console.log('The set looks like :>> ', mySet);

// let mySet2 = new Set([1,34,'This',false,{a:23,b:45}])
// console.log("New Set can look like:>>", mySet2);

console.log(mySet.has(234));

mySet.delete('that'); // Remove an element from the set
console.log(mySet);

// Iterating a set

for(let item of mySet){
    console.log('item is :>> ', item );
}

mySet.forEach((item)=>{
    console.log('item is :>> ', item );
})