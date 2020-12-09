const back = document.querySelector('#back');
const next = document.querySelector('#next');
const progress = document.querySelector('.step');
const steps = [...document.querySelectorAll('.circle')];

let step;

function progressSteps() {
  switch (step) {
    case 0:
      progress.style.width = '0%';
      break;
    case 1:
      progress.style.width = '25%';
      break;
    case 2:
      progress.style.width = '50%';
      break;
    case 3:
      progress.style.width = '75%';
      break;
    case 4:
      progress.style.width = '100%';
      break;
    default:
      console.log('Unidentified Error');
      break;
  }
}

function clickHandler(e) {
  if (e.target.name === 'next') {
    step = steps.findIndex((el) => el.classList.contains('active'));

    if (step === 4) { return; }

    steps[step].classList.remove('active');
    steps[step].classList.add('done');

    steps[step + 1].classList.add('active');

    step += 1;
  } else {
    step = steps.findIndex((el) => el.classList.contains('active'));

    if (step === 0) { return; }

    steps[step].classList.remove('active');

    steps[step - 1].classList.remove('done');
    steps[step - 1].classList.add('active');

    step -= 1;
  }
  progressSteps();
}

next.addEventListener('click', clickHandler);
back.addEventListener('click', clickHandler);
