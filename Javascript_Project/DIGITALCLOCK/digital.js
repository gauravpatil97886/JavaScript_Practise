// const clock=document.getElementById('clock');


// setInterval(function(){
//     let date=new Date();
//     clock.innerHTML=date.toLocaleTimeString();
    
// },1000)

function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    document.getElementById('left-timer').textContent = hours + ':' + minutes;
    document.getElementById('right-timer').textContent = seconds;
}

setInterval(updateClock, 1000);

updateClock();
