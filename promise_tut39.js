console.log('This is promise!..');

function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error = true;
            if(!error){

                console.log('Your promise can be resolved');
                resolve();
            }
            else{
                console.log('Your promise can be rejected');
                reject('Sorry not  fulfilled');
            }

        }, 2000);
    })
}

fun1().then(function(){
    console.log('Thanks for resolving')
}).catch(function(error){
    console.log('Very bed bro '+ error);
})