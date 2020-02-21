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
  if (switchTheme.checked) {
    ourTheme.classList.add('dark');
    ourTheme.classList.remove('light');
    return localStorage.setItem('theme', 'dark');
  }
  ourTheme.classList.add('light');
  ourTheme.classList.remove('dark');
  return localStorage.setItem('theme', 'light');
}

function saveOurTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    checkedFlag();
    return (switchTheme.checked = true) && checkedFlag();
  }
  checkedFlag();
  return (switchTheme.checked = false);
}

const varTheme = JSON.stringify(switchTheme);

console.log(varTheme);

switchTheme.addEventListener('change', checkedFlag);

window.addEventListener('DOMContentLoaded', saveOurTheme);
