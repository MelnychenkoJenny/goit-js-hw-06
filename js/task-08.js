const formLoginEl = document.querySelector('.login-form');

formLoginEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    alert('УВАГА! Всі поля мають бути заповнені. Гарного та мирного дня ;)');
  }
  const formData = new FormData(event.currentTarget);

  const objFormData = {
    email: email.value,
    password: password.value,
  };
  console.log(objFormData);
  event.currentTarget.reset();
}
