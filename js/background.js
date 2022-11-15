const UNSPLASH_API_KEY = '9PMZV9EvKnSVqCwZV0UG3XHKi0N27bJYydCePB1_y1Y';
const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}&query=landscape&orientation=landscape`;

const BG_IMAGE = 'bg-image';
const savedImage = localStorage.getItem(BG_IMAGE);

const body = document.querySelector('body');
const locationContainer = document.querySelector(
  '.js-location .location__text'
);

function getBackground() {
  fetch(UNSPLASH_URL)
    .then((response) => response.json())
    .then((json) => {
      const { urls, location, description } = json;

      if (urls && location) {
        const { full: fullUrl } = urls;
        const { name } = location;
        saveBackground(fullUrl, name, description);
      } else {
        getBackground();
      }
    });
}

function saveBackground(url, name, description) {
  if (savedImage !== null) {
    localStorage.removeItem(BG_IMAGE);
  }

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getTime() + 1000 * 60 * 30);

  const image = {
    url,
    name,
    description,
    expiresOn: expirationDate,
  };

  localStorage.setItem(BG_IMAGE, JSON.stringify(image));
  loadBackground();
}

function loadBackground() {
  if (savedImage === null) {
    getBackground();
  } else {
    const { url, name, description, expiresOn } = JSON.parse(savedImage);
    const today = new Date();

    if (today.getTime() > expiresOn) {
      getBackground();
    } else {
      body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${url})`;
      locationContainer.innerHTML = name ? name : description;
    }
  }
}

function init() {
  loadBackground();
}

init();
