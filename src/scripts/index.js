import 'regenerator-runtime';
import '../styles/main.css';
import './data/database';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  appBar: document.querySelector('app-bar'),
  data: document.querySelector('#maincontent'),
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

console.log('Hello Coders! :)');
