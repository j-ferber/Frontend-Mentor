const adviceNum = document.querySelector('.js-advice span');
const adviceParagraph = document.querySelector('.js-advice-paragraph');
const dice = document.querySelector('.js-dice');

const getAdvice = () => {
  fetch('	https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(advice => {
      console.log(advice);
      adviceNum.innerHTML = `#${advice.slip.id}`;
      adviceParagraph.innerHTML = `"${advice.slip.advice}"`
    })
}

dice.addEventListener('click', () => {
  getAdvice();
})