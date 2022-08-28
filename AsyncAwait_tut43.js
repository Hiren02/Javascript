console.log(" this is a AsyncAwait");

async function hiren(){
    console.log('Inside hiren function');
    const response = await fetch('https://api.github.com/users')
    console.log('before response');
    const users = await response.json();
    console.log('users resolved');
    return users;
    // return "Hiren";

}
console.log('Before calling hiren');
let a =hiren();
console.log('After calling hiren');
console.log(a)
a.then(data=>console.log(data))
console.log('Finised the files..')
