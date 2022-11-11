const root =document.getElementById("root");

let page=1;

const fetcData= async() =>{
   const response= await fetch("https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish")
    // .then(res=>res.json())
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
        let load=document.getElementById("load");
        page++;
        if(!load && response.current_page < response.last_page){
            root.insertAdjacentHTML("afterend",`
                 <div class="load">
                    <button id="load">Load More</button>
                 </div> `
            )
            
        }

        load=document.getElementById("load");
        load.addEventListener('click',fetcData)

    })
    .catch(e=>console.log(e));
}

fetcData()