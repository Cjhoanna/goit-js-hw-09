import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

var delayForm = document.getElementById('delay');
var stepForm = document.getElementById('step');
var amountForm = document.getElementById('amount');

document.querySelector('form').addEventListener('submit', validateForm);

async function validateForm(e) {
  await testTime(delayForm.value);
  for (let index = 0; index < amountForm.value; index++) {
    const s = await createPromise(15000, 15000)
      .then(response => {
        Notify.success(
          `✅ Fulfilled promise ${index + 1} in ${delayForm.value}ms`,
          {
            timeout: 5000,
          }
        );
      })
      .catch(({ position, delay }) => {
        Notify.failure(
          `❌ Rejected promise ${index + 1} in ${delayForm.value}ms`,
          {
            timeout: 5000,
          }
        );
      });
    await testTime(stepForm.value);
  }
}

async function testTime(value) {
  return await new Promise(res => setTimeout(res, value));
}

async function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return await Promise.resolve(resolve =>
      setTimeout(resolve(position), delay)
    );
  } else {
    return await Promise.reject(resolve =>
      setTimeout(resolve(position), delay)
    );
  }
}
