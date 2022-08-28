console.log('This is maps in JavaScript');

// Map in JavaSCrirpt : We can use any types of key or value

const myMap = new Map();

const key1 = 'myStr', key2 = {}, key3 = function(){};

// Setting map value

myMap.set(key1,'This is a string');
myMap.set(key2,'This is a blalnk object');
myMap.set(key3,'This is an empty function');
console.log(myMap);

// Getting the value from a Map

let value1 = myMap.get(key1);
console.log(value1);

//Get the size of the Map
console.log(myMap.size);

// You can loop using for..of to get keys ans values

for (let [key,value] of myMap){
    console.log(key,value);
}

// Get only keys

for ( let key of myMap.keys()){
    console.log('key is ',key);
}

for ( let value of myMap.values()){
    console.log('value is ',value);
}

// you can loop through a map using forEach loop

myMap.forEach((value,key)=>{
    console.log('key is ', key);
    console.log('value is ', value);
})

// Converting map to an array

let myArray = Array.from(myMap);
console.log('map to array is ', myArray);

// Converting map keys to an array

myArray = Array.from(myMap.keys());
console.log('map to keys array is ', myArray);

// Converting map values to an array

myArray = Array.from(myMap.values());
console.log('map to values array is ', myArray);
