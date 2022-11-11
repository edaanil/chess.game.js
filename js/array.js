// let example=['we','are','learning','js'];
// let user={

//     name:'Developer',
//     age:25,
//     'isAdmin':true
// }
// console.log(user['isAdmin']);
// let person={}
// person=Object.assign({},user);
// delete person.isAdmin;
// console.log(person);


// let example=['we','are','learning','js'];
// //slice
// console.log(example.slice(0,3));
// console.log(example.slice(-1));
// console.log(example.slice(-2));

//splice(start,count,adding elements)
let example=['we','are','learning','js'];

example.splice(2,1,'web development');
console.log(example);
example.splice(4,0,'add','add');
console.log(example);
//sort
// let data=[4,2,3,7];
// let check=['k','h','t','m','o']

// console.log(data.sort());
// console.log(check.sort());

let data=[44,55,66,88,22]
let check=['k','h','t','m','o']

console.log(data.sort((a,b)=>{
    if(a<b) return -1
    else if(a>b) return 1
    return 0
}));

let users=[
    {
        id:01,
        name:'a',
        marks:30
    },
    {
        id:02,
        name:'b',
        marks:33
    },
    {
        id:03,
        name:'c',
        marks:36
    },
    {
        id:04,
        name:'d',
        marks:39
    },
    
]
console.log(check.sort());
sortedArray=users.sort((a,b)=>{
 let x=a.marks
 let y=b.marks
 if(x<y) return -1
 else if(x>y) return 1
 return 0

});

sortedArray.forEach((e,i,a) => {
    console.table(e)
});

let each=[4,88,77,3,8,33];

each.forEach((e,i,a)=>{
  console.log(`${e} at index ${i} in Array ${a}`)
})

each.forEach((e)=>{
    console.log(e * 10);
})

let x= each.every((e,i)=>e > 10  );
console.log(x);

x=each.some((e,i)=> e > 10);
console.log(x);

//map

let ex_map =each.map((e)=>{
    return (e * 10);
})
console.log(ex_map);

//filter

let ex_arr=[4,88,undefined,true,'null',33,NaN,'JAVASCRIPT'];
let filterData=ex_arr.filter((e,i)=> e);
console.log(ex_arr.includes('null'));
console.log(ex_arr.indexOf(33));


// concat

let b=[5,8,10,12,15];
let c=[25,35,40,50,60];
b=b.concat(c);
console.log(b);
