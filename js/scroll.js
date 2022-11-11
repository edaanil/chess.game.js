const root =document.getElementById("root");

let page=1;

const fetcData=()=>{
    fetch("https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish")
    .then(res=>res.json())
    .then(response=>{
        response.data.forEach(element => {
            root.insertAdjacentHTML("afterbegin",`
            <div>
                <div>
                    <img src=${element.image.thumbnail} />
                </div>
                <h3>${element.name}</h3>
                <p>${element.description}</p>
                <h4>${element.price}</h4>
              
        </div>`
            )
            
        });
      
    })
    .catch(e=>console.log(e));
}

fetcData();

// let body=document.querySelector('body')

document.addEventListener('scroll',()=>{
    let scrollValue=window.pageYOffset;
    let totalHeight=root.clientHeight;
    const scroll=(scrollValue/totalHeight)*100;
    console.log(scroll);
    if(scroll>67 && page<10)
    {
        page++;
        fetcData()
    }
  
    
}

)
