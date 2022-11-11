let  x=document.getElementById("root");

let img =document.createElement("img");

const input=document.getElementsByTagName("input");

const form=document.createElement('form');

['fname','lname','gender','mobile'].forEach(e=>{
    let input=document.createElement('input')
    input.setAttribute("name",e);
    form.appendChild(input);
} )

const submitButton=document.createElement('button');
submitButton.innerText="submit";
form.appendChild(submitButton);
const container=document.getElementById('container');

container.appendChild(form);

submitButton.addEventListener('click',()=>{

    event.preventDefault();
    console.log(form.fname.value);
    console.log(form.lname.value);
    console.log(form.gender.value);
    console.log(form.mobile.value);


})
