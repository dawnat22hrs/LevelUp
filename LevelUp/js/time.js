let time = 1800;

const countDownMin = document.getElementById('time__val');
const countDownSec = document.getElementById('time__sec');

setInterval(updateCountDownMin, 1000);
setInterval(updateCountDownSec, 1000);

function updateCountDownMin(){
    let minutes = Math.floor( time / 60 );

    minutes = minutes < 10 ? "0" + minutes : minutes;
    countDownMin.innerHTML = `${minutes}`;
    time--;
}

function updateCountDownSec(){
    let seconds = time % 60

    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDownSec.innerHTML = `${seconds}`;
    time--;
}