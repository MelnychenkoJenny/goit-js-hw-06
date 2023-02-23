const refs = {
  nameInput: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value.trim();
  if (refs.nameLabel.textContent.length === 0) {
    refs.nameLabel.textContent = 'Anonymous';
  }
}
