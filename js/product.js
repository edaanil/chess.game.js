const root=document.getElementById('root');

fetch("https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&language=en&search=type.slug:grocery%3Bstatus:publish")
.then(response=>response.json())

.then(res =>{
    root.style.display="grid";
    root.style.gridTemplateColumns="repeat(4,1fr)";
    root.style.gap="1rem";
    
    res.forEach(Element=>
        {
            const container=document.createElement('div');
            const img =document.createElement('img');
            const flexContainer=document.createElement('div');
            const name=document.createElement('p');
            const price=document.createElement('p');
            const descr=document.createElement('p'); 
            img.setAttribute('src',element.image.thumbnail);
            name.innerText= element.name;
            price.innerText= element.price;
            descr.innerText= element.descr;

            flexContainer.style.display="flex";
            flexContainer.style.justifyContent="space-between";
            container.setAttribute('date-id',element.id);

            container.appendChild(img);
            container.appendChild(flexContainer);
            container.appendChild(descr);

        })


}
     )