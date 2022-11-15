const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('span');

function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  clockTitle.innerText = `${hours}:${minutes}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
