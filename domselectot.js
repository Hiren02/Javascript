console.log('This is dom selector');

/*
Element selector
1. Single element seletor
2. multi element selector

*/


// 1. Single element seletor

let element = document.getElementById('first');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color= 'blue';
element.innerText="Hiren chavda is programmer";
element.innerHTML="<b>Hiren chavda is programmer</b>";
// console.log(element.innerHTML);
// console.log(element.innerText);
console.log(element);


let sel= document.querySelector('#first');
sel = document.querySelector('.child');
// sel = document.querySelector('b');
sel = document.querySelector('div'); // only first div can show
sel.style.color = 'red'; //  only first div color change
console.log(sel);


// 2. multi element selector

let ele = document.getElementsByClassName('child'); 
ele = document.getElementsByClassName('container');
ele= document.getElementsByTagName('div');
console.log(ele);
// console.log(ele[0].getElementsByClassName('child'));

Array.from(ele).forEach(function(element){
    console.log(element);
    element.style.color = "blue";
})
