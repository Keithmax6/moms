const timeLeft = document.getElementById('time-left');

const birthDay = new Date('09/10/2021');
const second = 1000;
const minute = second*60;
const hour = minute*60;
const day = hour*24
let timerID;

const countDown = ()=>{
  const today = new Date();
  const timeSpan = birthDay-today;
  console.log(timeSpan)
  if(timeSpan<=-day){
   timeLeft.innerHTML='Hope you had a nice BirthDay!'
    clearInterval(timerID);
   return
  }
  if(timeSpan<=0){
    timeLeft.innerHTML = 'Happy Birthday!!!'
    clearInterval(timerID)
    return
  }
  const days = Math.floor(timeSpan/day)
  const hours = Math.floor((timeSpan % day)/ hour)
  const minutes = Math.floor((timeSpan % hour)/minute)
  const seconds = Math.floor((timeSpan % minute)/second)

  timeLeft.innerHTML = days + 'days ' + hours + 'hours ' + minutes + 'minutes ' + seconds + 'seconds '
}

timerID = setInterval(countDown,second)
