import './css/styles.css';
import './css/darktheme.css';
import products from './menu.json';
import menuProducts from './templates/menu.hbs';

const menu = document.querySelector('.js-menu');

function buildOurMenu(products) {
  const markup = products.map(product => menuProducts(product)).join('');
  menu.insertAdjacentHTML('beforeend', markup);
}
buildOurMenu(products);

const ourTheme = document.querySelector('body');

const switchTheme = document.querySelector('input.js-switch-input');

function checkedFlag() {
  ourTheme.classList.add('dark');
  ourTheme.classList.remove('light');
  localStorage.setItem('theme', 'dark');
}

function unCheckedFlag() {
  ourTheme.classList.add('light');
  ourTheme.classList.remove('dark');
  localStorage.setItem('theme', 'light');
}

function saveOurTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    switchTheme.checked = true;
    checkedFlag();
  } else {
    switchTheme.checked = false;
    unCheckedFlag();
  }
}

function changeTheme() {
  if (switchTheme.checked) {
    checkedFlag();
  } else {
    unCheckedFlag();
  }
}

const varTheme = JSON.stringify(switchTheme);

console.log(varTheme);

switchTheme.addEventListener('change', changeTheme);

window.addEventListener('DOMContentLoaded', saveOurTheme);
