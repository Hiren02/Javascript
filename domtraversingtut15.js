console.log("This is dom traversing");

 let cont = document.querySelector('.no');
 cont = document.querySelector('.container');
 let nodeName= cont.childNodes[0].nodeName;
 console.log(nodeName);

 let nodeType= cont.childNodes[0].nodeType;
 console.log(nodeType);

// Node Type
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. comment
// 9. document
// 10. DocType

//  console.log(cont.childNodes);
//  console.log(cont.children);

let container = document.querySelector('div.container');

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);

console.log(container.childElementCount); // count of child element

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);