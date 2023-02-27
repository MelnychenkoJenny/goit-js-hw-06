const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.dataset.length; // or inputEl.getAttribute('data-length')

inputEl.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(event) {

  inputEl.classList.toggle(
    'valid',
    event.currentTarget.value.trim().length === Number(dataLength),
  );
  
  inputEl.classList.toggle(
    'invalid',
    event.currentTarget.value.trim().length !== Number(dataLength),
  );
}
