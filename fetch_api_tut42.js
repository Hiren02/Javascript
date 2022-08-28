console.log('This is fetch api');

// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");

// function getData(){
//     console.log("Started get Data")
//     url = "hiren.txt";
//     fetch(url).then((response)=>{
//         console.log('inside first then')
//         return response.text();
//     }).then((data)=>{
//         console.log('inside second then')
//         console.log(data);
//     })
// }



// function getData(){
//     console.log("Started get Data")
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log('inside first then')
//         return response.json();
//     }).then((data)=>{
//         console.log('inside second then')
//         console.log(data);
//     })
// }


function postData(){
    // console.log("Started get Data")
    url = "https://api.github.com/users";
    data = '';
    paras = {
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(url,paras).then(response=> response.json())
    .then(data=> console.log(data))
}

postData();
