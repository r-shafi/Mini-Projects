const create = document.querySelector('#newNote');
const createForm = document.querySelector('.create');
const notes = document.querySelector('.notes');
const count = document.querySelector('#count');
const addNew = document.querySelector('#addNew');

count.innerText = localStorage.length;

//* Toggle Note Creation Form
create.addEventListener('click', () => createForm.classList.add('opened'));

//* Create Note
addNew.addEventListener('click', () => {
  const note = {
    title: document.querySelector('#title').value,
    desc: document.querySelector('#desc').value,
    time: Intl.DateTimeFormat('en-GB').format(new Date()),
  };

  const id = Date.now();

  localStorage.setItem(id, JSON.stringify(note));

  notes.innerHTML += addNoteToDOM(note, id);

  createForm.querySelector('form').reset();
  createForm.classList.remove('opened');
  count.innerText = localStorage.length;
});

//* Load Notes
if (localStorage.length) {
  for (const id of Object.keys(localStorage).reverse()) {
    const objectify = JSON.parse(localStorage[id]);
    notes.innerHTML += addNoteToDOM(objectify, id);
  }
}

//* Deleting Note
notes.querySelectorAll('#delete').forEach((btn) =>
  btn.addEventListener('click', () => {
    localStorage.removeItem(btn.dataset.key);
    btn.parentElement.remove();
    count.innerText = localStorage.length;
  })
);

//* Note DOM Element
function addNoteToDOM({ title, desc, time }, id) {
  return `
  <div class="note">
    <h1>${title}</h1>
    <span>${time}</span>
    <p>${desc}</p>
    <button id="delete" data-key="${id}">x</button>
  </div>
  `;
}
