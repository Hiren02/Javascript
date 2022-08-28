console.log('This is element');

let element = document.createElement('li');
let text = document.createTextNode('I am Hiren');
element.appendChild(text);


// Add a class name to the li element

element.className = 'childul';
element.id = 'creaetedLi';
element.setAttribute('tittle','mytittle');
// element.innerText = 'heyy,This is created by Hiren Chavda';

let ul = document.querySelector('ul.this');
ul.appendChild(element )
console.log(ul);
console.log(element);

let elem2= document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('THis is created node for elem2');
elem2.appendChild(tnode);  

element.replaceWith(elem2);

elem2.removeChild(); 