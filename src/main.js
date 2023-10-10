import { nanoid } from 'nanoid';
import './style.css';

const passwordBtn = document.querySelector('#password');
const displayRandomPassword = document.querySelector('#randomPassword');

passwordBtn.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayRandomPassword.innerHTML = randomPassword;
});

displayRandomPassword.addEventListener('click', (copia) => {
  copy(copia.target.innerHTML);
  alert('Senha copiada!');
});
