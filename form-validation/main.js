const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#tel');
const passInput = document.querySelector('#pass');
const signUp = document.querySelector('#sign-up');
const showPass = document.querySelector('#show-pass');
const formElement = document.querySelector('form');

const nameRegex = /^[a-z ,.'-]+$/i;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
// phoneRegex useless
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!nameInput.value.match(nameRegex)) {
    document.querySelector('.name-error').style.display = 'block';
  } else {
    document.querySelector('.name-error').style.display = 'none';
  }

  if (!emailInput.value.match(emailRegex)) {
    document.querySelector('.email-error').style.display = 'block';
  } else {
    document.querySelector('.email-error').style.display = 'none';
  }

  if (!passInput.value.match(passRegex)) {
    document.querySelector('.pass-error').style.display = 'block';
  } else {
    document.querySelector('.pass-error').style.display = 'none';
  }

  if (
    !nameInput.value.match(nameRegex) ||
    !emailInput.value.match(emailRegex) ||
    !passInput.value.match(passRegex)
  ) {
    return;
  } else {
    formElement.reset();
    document.querySelector('.success').style.display = 'block';
  }
});

showPass.addEventListener('click', (e) => {
  e.target.previousElementSibling.type = 'text';
});
