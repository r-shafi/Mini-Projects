const btn = document.querySelector('#btn');
const pop = document.querySelector('.dialogue');

btn.addEventListener('click', () => pop.classList.add('active'));

const accept = document.querySelector('#accept');
const reject = document.querySelector('#reject');

accept.addEventListener('click', () => {
  pop.classList.remove('active');
  document.body.innerHTML = `<h1>SUCCESS</h1>
  <a href="#">GO BACK ▄</a>`;
});
reject.addEventListener('click', () => {
  pop.classList.remove('active');
  document.body.innerHTML = `<h1>You Rejected</h1>
  <a href="#">GO BACK ▄</a>`;
});
