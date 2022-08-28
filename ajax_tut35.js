console.log("This is ajax ");

 let fetchBtn = document.getElementById('fetchBtn');
 fetchBtn.addEventListener('click', buttonClickHandler)

 function buttonClickHandler(){
     console.log('You have to clicked the fetchBtn');

     //instantiate an xhr object
     const xhr = new XMLHttpRequest()

     //open the object 
     xhr.open('GET','hiren.txt',true);

     //what to do on prograss (optional)
     xhr.onprogress = function(){
         console.log('on progress');

     }

     //what to do when respose is ready
     xhr.onload = function(){
         if(this.status === 200){

             console.log(this.responseText);
         }
         else{
             console.error('some erorr occured');
         }
     }

     // send the request
     xhr.send();
 }