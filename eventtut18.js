console.log('This is events');

let btn = document.getElementById('btn');
btn.addEventListener('click',fun1);

function fun1(e){
    console.log("Thanks",e);
    e.preventDefault();
}


btn.addEventListener('dblclick',fun2);

function fun2(e){
    console.log("Thanks its a double click event",e);
    e.preventDefault();
}


document.querySelector('.container')
.addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY)
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},130)`; 
})