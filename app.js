let timer;
let time = 0;

function displayTime() {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  document.querySelector('.display').textContent = 
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('startBtn').addEventListener('click', function() {
  timer = setInterval(function() {
    time++;
    displayTime();
  }, 1000);
});

document.getElementById('stopBtn').addEventListener('click', function() {
  clearInterval(timer);
});

document.getElementById('resetBtn').addEventListener('click', function() {
  clearInterval(timer);
  time = 0;
  displayTime();
});
    