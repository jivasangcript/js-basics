const weather = document.querySelector('.js-weather .weather__text');

const API_KEY = '27c4ca869b421bfa056f852015a2ff6e';
const COORDS = 'coords';

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      const { name: place } = json;
      const { temp } = json.main;
      weather.innerText = `${Math.floor(temp)}° @ ${place}`;
    });
}

function saveCoords(coords) {
  localStorage.setItem(COORDS, JSON.stringify(coords));
}

function handleGeoSuccess(position) {
  const { latitude, longitude } = position.coords;
  const coords = {
    latitude,
    longitude,
  };
  saveCoords(coords);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log('위치에 접근할 권한이 없습니다.');
}

function getCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const currentCoords = localStorage.getItem(COORDS);
  if (currentCoords !== null) {
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  } else {
    getCoords();
  }
}

function init() {
  loadCoords();
}

init();
