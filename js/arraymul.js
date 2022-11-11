// task1

// const num1=7;
// const num2=5;
// const multiples =(num1,num2)=>{
//     const res=[];
//     for(let i=num1;i<=num1*num2;i+=num1)
//    {
//      res.push(i);
// };
// return res;
// };
// console.log(multiples(num1,num2));

// let numbers=[0,[2],1,[3],[5,6],4,[7,8]];
// numbers.sort();
// console.log(numbers)

// task2

// x=[2,4,5,[4,34,6],[3,6,2]]

// y=x.map( e=> {
//   if(e[0]){
//     return e.sort((a,b)=>a-b);
//   }
//   return e;
// }

// )

// z=y.sort((a,b)=>{
//   if(a[0] && b[0]) return[0]-b[0];
//   if(a[0] && b[0] == undefined) return a[0] - b;
//   if(a[0]== undefined && b[0]) return a - b[0];
//   return a - b;
// }

// )

// task3..............Find the Smallest and Biggest Numbers

a=[1,2,3,4,5]

var higher=a[0];
var lower=a[0];
for(var i=0;i<a.length;i++)
{

var b = a[i];
if(b>higher)
{
higher=a[i];

}
if(b<lower)
{
lower=a[i];

}

}

console.log(higher);
console.log(lower);


// // task4............Largest Swap

function largest(a){

  a = a.toString();
  return a[0]>=a[1];
  
  }
  
  console.log(largest(43));
     console.log(largest(47));
     console.log(largest(77));

     //task 4
     var name="Acharya"
     console.log(name.match(/A/g).length);


     

   // task5....Filter out Strings from an Array

   const filterArray = (arr) => {
      let filteredArr = [];
      for (let i = 0; i < arr.length; i++) {
        if ( typeof arr[i] !== "string") {
          filteredArr.push(arr[i])
        } 
      } return filteredArr
    };
    console.log(filterArray([1, 2, "a", "b"]));
    console.log(filterArray([1, "a", "b", 0, 15]));
    console.log(filterArray([1, 2, "aasf", "1", "123", 123]));


// task6..........Hiding the Card Number

var input = "1234567890";
 input = input.replace(/^(\d{0,4})(\d{0,3})/, '$1 $2')
 var prefix = input.substr(0, input.length - 4);
 var suffix = input.substr(-4);
 var masked = prefix.replace(/\d/g, '*');
 var a = masked + suffix;
 console.log(a)


//  task7..............Maximum possible total

let sum=[10,25,30,15].reduce(function(previousValue,currentValue){
  return previousValue+currentValue;
} ,0);

console.log(sum);

// task 1: ................Finding the nemo

const { performance } = require('perf_hooks');


const nemo = ['wsup', 'you ugly', 'ya momma', 'nemo'];
const large = new Array(2).fill('nemo');

function findNemo (array){
    
try{
   
  let t0 = performance.now();
  console.log("time before is: " + t0);
    
    let i=0, j = array.length;
    
     if(j === 0){
        return;
    }
    
    for(i=0; i < j; i++){
      if(array[i] === 'nemo'){
          console.log('Found Nemo!');
      }  
    }
     let t1 = performance.now();
    console.log("time after is: " + t1);
    console.log('time took to find nemo is: ' + (t1-t0));
    
    } catch (err) {
        console.err(err);
        throw err;
    }
  }

     findNemo(large);


    //  task1....................Currying function
  
    function curry(func, arity = func.length) {
      return function (...args) {
        if (args.length >= arity) {
          return func(...args);
        } else {
          return curry(func.bind(this, ...args), arity - args.length);
        }
      };
    }
    
    const multiply = curry((a, b, c) => a * b * c);
    
    console.log(multiply(2,3,8))



    
    
    

    





  
