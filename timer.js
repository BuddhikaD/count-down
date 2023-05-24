const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
const congratulations = document.getElementById('congratulations');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`May 29 ${currentYear} 09:00:00`);

// Set background year
year.innerText = currentYear;

// Update countdown time
function updateCountdown() {


  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  if(d<0 && h<0 && m<0 && s<1){
    stop(timer)
    countdown.style.display = 'none';
    congratulations.style.display = 'inline-block';
  }else{
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
  }


}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

function stop(timer) {
  if (timer) {
      clearTimeout(timer);
      timer = 0;
  }
}

// Run every second
const timer = setInterval(updateCountdown, 1000);
