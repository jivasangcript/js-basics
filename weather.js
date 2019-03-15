const COORDS = 'coords';

function saveCoords(coords) {
  localStorage.setItem(COORDS, JSON.stringify(coords));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coords = {
    latitude,
    longitude
  };
  saveCoords(coords);
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    // getWeather
  }
}

function init() {
  loadCoords();
}

init();