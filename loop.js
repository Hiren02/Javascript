console.log('This is loop');

// for (let i = 0; i <=10; i++) {
//     console.log(i);
    
// }

// let j=0;
// while (j<=10) {
//     console.log(j);
//     j++;
    
// }



// let k=1;
// do {
//     console.log(k);
//     if (k===5) {
//         break;
//     }
//     k++;
// } while (k<=10);


// let arr=[2,3,4,5,6];
// arr.forEach(function(element){
//     console.log(element)
// });


let obj={
    name:'Hiren',
    age:'21',
    type:'programer',

}

for(let key in obj){
    console.log(The `${key} of object is ${obj[key]}`)
}