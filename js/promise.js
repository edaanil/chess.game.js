// var x=5;

// const promise=new Promise((resolve,reject)=>{

//     if(x==5){
//         resolve((x))
//     }

//     else{
//         reject(new Error("x is not equals to 1"))
//     }

// })

// promise
// .then(e=>e)
// .then(e=>e+10)
// .then(e=>console.log(e))
// .catch(err=>console.log(err));





// const createOrder =(cart,validateCart) =>{

// }
// const validateCart=(cart,payment)=>{

// }

// const payment=(cart,validatePayment)=>{

// }

// createOrder(cart,validateCart(cart,payment));

const cart =[

    {
        id:1,
        qty:2,
        name:"earphone"
    },
    {
        id:2,
        qty:3,
        name:"charger"
    },
    {
        id:3,
        qty:1,
        name:"laptop"
    },
    {
        id:4,
        qty:1,
        name:"mobile"
    },
    {
        id:5,
        qty:4,
        name:"pens"
    }


]

const createOrder=()=>{
    return new Promise ((resolve,reject)=>{
        if(cart.length){

            resolve.payment(({cart,id:1}))
        }
        else
        {
            reject(new Error("empty cart"))
        }
}

 )
}

const payment=(arg)=>{
    return new Promise ((resolve,reject)=>{
        let paymentId=1;
        if(paymentId)
        
        {

           setTimeout(()=> resolve.payment(({cart,id:1})),2000)
        }
        else
        {
            reject(new Error("payment failed"))
        }
}

 )
}






