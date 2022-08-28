console.log('This is function');

// function greet(name, thank) {
//     console.log(`Happy new year ${name} for your best year ${thank} `);
// }

// let name = 'Hiren';
// let name2 = 'Manan';

// greet(name, 'thank a lot to wish me');
// greet(name2) 



const mygreet =function(name, thank) {
    let msg=`Happy new year ${name} for your best year ${thank} `;
    return msg;
}

let name = 'Hiren';
let name2 = 'Manan';

let val = mygreet(name,'Thank a lot');
console.log(val);


const myobj = {
    name:'Hiren',
    movie:function(){
        return "Siddhat";
    }
}
console.log(myobj.movie())