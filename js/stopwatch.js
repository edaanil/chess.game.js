let x;
let startstop=0;
function startStop()
    {
      startstop=startstop+1;
      if(startstop===1)
      {
        start();
        document.getElementById("start").innerHTML="stop";
      }
      else if(startstop===2)
      {
        stop();
        document.getElementById("stop").innerHTML="start";
      }
   
    }

    function start()
    {
        x=setInterval(timer,10);
    }

    function stop()
    {
        clearInterval(x);
    }

