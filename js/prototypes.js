// localStorage.setItem("abc","random");
// console.log(localStorage.getItem("abc"));

// sessionStorage.setItem("klm","cmr");
// console.log(sessionStorage.getItem("cmr"));

let x=10;
let y=20;

const ul=document.getElementsByTagName("list");
const firstChild=document.querySelector("#list:nth-child(0)");
const newLi=document.createElement("li");
newLi.innerText="New List Added";
// console.log(firstChild);
add(x++,++y);




function add(firstArg,secondArg){
 ul.appendChild(newLi);

   firstArg++;
//    firstArg=0;
    return firstArg+secondArg;
}

const req=new XMLHttpRequest();
req.open("GET","https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish");

req.send();

console.log(req.response);
