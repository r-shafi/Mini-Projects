const task = document.querySelector('#task');
const add = document.querySelector('#add');
const todos = document.querySelector('.todos');

function saveTodo(e) {
  e.preventDefault();
  if (!task.value) {
    return;
  }
  localStorage.setItem(
    Date.now(),
    JSON.stringify({ task: task.value, class: 'unchecked', done: false })
  );

  todos.innerHTML = null;
  drawTodo();

  document.querySelector('form').reset();
}

add.addEventListener('click', saveTodo);

function drawTodo() {
  for (key of Object.keys(localStorage)) {
    todos.innerHTML += `
      <li data-key="${key}" class="${JSON.parse(localStorage[key]).class}">
        ${JSON.parse(localStorage[key]).task}
        ${
          JSON.parse(localStorage[key]).done
            ? '<input type="checkbox" checked />'
            : '<input type="checkbox"/>'
        }
      </li>`;
  }
}

drawTodo();

function check(e) {
  const key = e.target.parentElement.dataset.key;
  localStorage.setItem(
    key,
    JSON.stringify({
      task: e.target.parentElement.innerText,
      done: true,
      class: 'checked',
    })
  );
  e.target.parentElement.classList.add('checked');
}

function listener() {
  document
    .querySelectorAll('[type="checkbox"]')
    .forEach((box) => box.addEventListener('click', check));
}

listener();

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
  localStorage.clear();
  todos.innerHTML = null;
  drawTodo();
});
