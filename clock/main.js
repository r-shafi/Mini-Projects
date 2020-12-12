const timeBody = document.querySelector('.now');
const dateBody = document.querySelector('.date');

let format = '24H';

const radioButtons = document.querySelectorAll('[type="radio"]');

radioButtons.forEach((btn) => btn.addEventListener('click', (e) => (format = e.target.value)));

dateBody.innerHTML = Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
  new Date(),
);

function timeUpdater() {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  timeBody.innerHTML = format === '24H'
    ? `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${
      sec < 10 ? `0${sec}` : sec
    }`
    // abc divider
    : `${hour <= 12 ? hour === 11 ? hour : hour === 12 ? hour : `0${hour}` : hour - 12}:${
      min < 10 ? `0${min}` : min
    }:${sec < 10 ? `0${sec}` : sec}<span>${hour < 12 ? 'am' : 'pm'}</span>`;
}

setInterval(timeUpdater, 1000);
