function addClass(input) {
  const selection = document.querySelector(`.js-numbers-${input}`);
  if (!selection.classList.contains('js-numbers')) {
    removePrevious();
    selection.classList.add('js-numbers');
  }
  else {
    selection.classList.remove('js-numbers');
  }
}

function removePrevious() {
  const removeElement = document.querySelector('.js-numbers');
  if (removeElement)
    removeElement.classList.remove('js-numbers');
}

let userScore = '';

function determineScore(input) {
  userScore = document.querySelector(`.js-numbers-${input}`).innerHTML;
  document.querySelector('.js-total-rating').innerHTML = `You selected ${userScore} out of 5`
}

function submit() {
  if (document.querySelector('.js-numbers')) {
    document.querySelector('.thank-you-container').classList.remove('hidden');
    document.querySelector('.container').classList.add('hidden');
  }
}

