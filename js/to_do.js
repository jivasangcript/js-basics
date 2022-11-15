const form = document.querySelector('.js-toDo');
const input = form.querySelector('input');
const list = document.querySelector('.js-toDoList');

const TODOS = 'toDos';

let toDos = [];

function persistToDos() {
  localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function saveToDo(text) {
  const toDo = {
    id: toDos.length + 1,
    value: text,
  };
  toDos.push(toDo);
  persistToDos();
}

function addToDo(text) {
  const toDo = document.createElement('li');
  toDo.className = 'toDo';
  toDo.id = toDos.length + 1;

  const deleteBtn = document.createElement('span');
  deleteBtn.className = 'toDo__button';
  deleteBtn.innerHTML = '❌';
  deleteBtn.addEventListener('click', deleteToDo);

  const label = document.createElement('label');
  label.innerText = text;

  toDo.appendChild(deleteBtn);
  toDo.appendChild(label);
  list.appendChild(toDo);
  saveToDo(text);
}

function deleteToDo(event) {
  const { target } = event;
  const li = target.parentElement;
  const ul = li.parentElement;
  const { id: toDoId } = li;

  ul.removeChild(li);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(toDoId));
  persistToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  addToDo(currentValue);
  input.value = '';
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((toDo) => {
      addToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
}

form.addEventListener('submit', handleSubmit);

init();
