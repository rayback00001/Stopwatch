let Seconds = document.querySelector('.seconds');
let Milli = document.querySelector('.milli');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let seconds = 0;
let milli = 0;
let interval;


function startTimer(){
    milli++;
    if(milli <= 9)
    {
        Milli.innerHTML = '0' + milli;
    }

    else if(milli > 9)
    {
        Milli.innerHTML = milli;
    }

    if(milli > 99)
    {
        milli = 0;
        Milli.innerHTML = '0' + 0;
        seconds++;
        Seconds.innerHTML = '0' + seconds;
        
    }

    if(seconds > 9)
    {
        Seconds.innerHTML = seconds;
    }
}

btnStart.addEventListener('click',()=>{
     interval = setInterval(startTimer,10);
});

btnStop.addEventListener('click', () =>{
    clearInterval(interval);
})



