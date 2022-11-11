const hh=document.getElementById("hh");
const mm=document.getElementById("mm");
const ss=document.getElementById("ss");
const ms=document.getElementById("ms");

let time=0;

const updateUI=(...arg)=>{

}



const start=()=>{
    let hour=0,minute=0,second=0,millisecond=0;
    time++;
    if(time>99){
        second=time/(100)
    }
    if(time>60*100){
        minute=time/(60*100)
        
    }
    if(time>3600*100){
        hour=time/(3600*100)
    }
    // hour=time/(3600*100);
    // minute=time/(60*100);
    // second=time/(100);
    millisecond =time -((parseInt(hour)*3600*100) + parseInt(minute)*60*100  + parseInt(second)*100 );
    // console.log(time)
    console.log(hour,minute,second,millisecond);

}
let interval=setInterval(start,10)
const stop=()=>{
    clearInterval(interval)
}

const reset=()=>{
    clearInterval(interval)
    time=0;
    updateUI(0,0,0,0);
}


