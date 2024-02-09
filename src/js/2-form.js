const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

const data = form => {
  const email = form.email.value;
  const message = form.message.value;
  return {
    email,
    message,
  };
};

form.addEventListener('input', event => {
  localStorage.setItem(storageKey, JSON.stringify(data(form)));
});

const dataFromStorage = localStorage.getItem(storageKey);

if (dataFromStorage) {
  const object = JSON.parse(dataFromStorage);
  form.email.value = object.email;
  form.message.value = object.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (localStorage) {
    console.log(JSON.parse(dataFromStorage));
  }
  localStorage.clear();
  form.reset();
});