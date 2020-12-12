const input = document.querySelector('#minutes');
const timeLeft = document.querySelector('.left');
const endsAt = document.querySelector('.ends');

let memoryOfInterval;

input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    timer(e.target.value);
    e.target.value = null;
  }
});

function timer(minutes) {
  clearInterval(memoryOfInterval); // Incase another timer was running

  const now = Date.now() / 1000;
  const end = now + (Number(minutes) * 60);

  displayTime(end);

  const temp = new Date(end * 1000).toLocaleString();
  endsAt.innerHTML = `Timer ends at ${temp.split(', ')[1]}`;

  memoryOfInterval = setInterval(() => {
    displayTime(end);
  }, 1000);
}

function displayTime(end) {
  if (Date.now() / 1000 >= end) {
    clearInterval(memoryOfInterval);
  }

  const secondsLeft = Math.round(end - Date.now() / 1000);

  const remainderMinutes = Math.floor(secondsLeft / 60);
  const remainderSeconds = secondsLeft % 60;

  timeLeft.innerHTML = `${remainderMinutes}:${remainderSeconds < 10 ? `0${remainderSeconds}` : remainderSeconds}`;
}
