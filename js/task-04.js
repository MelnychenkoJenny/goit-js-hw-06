let counterValue = 0;
const counterEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

function onDecrementBtnClick() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}
function onIncrementBtnClick() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);
