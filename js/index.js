const  handleClick=(e)=>{
    let contact =document.querySelector("#contact");
    contact.scrollIntoView({behavior:"smooth"})
    // console.log(event.target.innerText)
}

// const handleClick2=(e)=>{
//     console.log(event.target.innerText)
// }

let div=document.querySelector("#div");

div.addEventListener('click',handleClick2)
