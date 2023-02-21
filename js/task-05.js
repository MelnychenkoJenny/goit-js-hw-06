const refs = {
  nameInput: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.nameLabel.textContent =
    event.currentTarget.value === '' ? 'Anonymous' : event.currentTarget.value;
}
