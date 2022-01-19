let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let miliDiv = document.getElementById("milisecs");
let meridian = document.getElementById("meridian");

function displayTime()
{
    setInterval(() => {
        let realTime = new Date();
        
        let displayHours = realTime.getHours();
        let displayMinutes = realTime.getMinutes();
        let displaySeconds = realTime.getSeconds();
        hours.innerText = displayHours + ":";        
        minutes.innerText = displayMinutes + ":";
        seconds.innerText = displaySeconds + "  "
        if(displayHours > 11){
            meridian.innerText = "pm"
        }else{
            meridian.innerText = "am"
        }
        
    }, 1000);

}


displayTime();
