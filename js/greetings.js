const nameContainer = document.querySelector('.js-name');
const USERNAME = 'username';

function saveName(name) {
  localStorage.setItem(USERNAME, name);
}

function renderName(name) {
  nameContainer.innerHTML = '';
  const nameText = document.createElement('span');
  nameText.className = 'name__text';
  nameText.innerHTML = `안녕하세요, ${name}!`;
  nameContainer.appendChild(nameText);
}

function renderInput() {
  const input = document.createElement('input');
  const form = document.createElement('form');

  input.type = 'text';
  input.className = 'name__input';
  input.placeholder = '당신의 이름은 뭔가요?';

  form.addEventListener('submit', handleSubmit);
  form.appendChild(input);
  nameContainer.appendChild(form);
}

function handleSubmit(event) {
  event.preventDefault();

  const { target } = event;
  const input = target.querySelector('input');
  const { value } = input;

  saveName(value);
  renderName(value);
}

function loadName() {
  const username = localStorage.getItem(USERNAME);

  if (username === null) {
    renderInput();
  } else {
    renderName(username);
  }
}

function init() {
  loadName();
}

init();
