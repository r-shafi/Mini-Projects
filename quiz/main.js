const question = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const correctAnswer = document.querySelector('.correctAns');

async function fetchData() {
  const response = await fetch('./questions.json');
  const data = await response.json();
  //* QUESTION
  const randomIndex = Math.round(Math.random() * 50);
  question.innerText = data.results[randomIndex].question;
  //* OPTIONS
  const possibleAnswers = [
    data.results[randomIndex].correct_answer,
    ...data.results[randomIndex].incorrect_answers,
  ].sort();

  optionsContainer.innerHTML = null;

  for (const option of possibleAnswers) {
    optionsContainer.innerHTML += `
      <div class="option">${option}</div>
    `;
  }

  nextButton.style.display = 'none';
  correctAnswer.style.display = 'none';
  correctAnswer.innerHTML = null;

  optionsContainer.addEventListener(
    'click',
    (e) => {
      const choice =
        e.target.innerText === data.results[randomIndex].correct_answer;

      choice
        ? e.target.classList.add('correct')
        : e.target.classList.add('wrong');

      nextButton.style.display = 'block';

      if (!choice) {
        correctAnswer.style.display = 'block';
        correctAnswer.innerHTML = `The answer is <span>${data.results[randomIndex].correct_answer}</span>`;
      }
    },
    { once: true }
  );
}

fetchData();

const nextButton = document.querySelector('#next');
nextButton.addEventListener('click', fetchData);
