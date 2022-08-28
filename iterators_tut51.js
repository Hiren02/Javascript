console.log('This is Iterator');

// iterators

function fruitsIterator(values){
    let nextIndex = 0;
    // we will return an object
    return{
        next:function(){
            if (nextIndex < values.length) {
                // we will return below object
               return {
                    value:values[nextIndex++],
                    done:false
                }

            }
            else{
                // we will return below object with only done
                return{

                    done:true
                }
            }
        }
    }

}
const myArray = ['Apple','Graps','Oranges','pineapple'];
console.log('My array is ', myArray);

// use the iterator

const fruits = fruitsIterator(myArray)
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
