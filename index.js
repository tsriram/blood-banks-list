import React from 'react';
import ReactDOM from 'react-dom';
import BloodBanksContainer from './components/BloodBanksContainer';

import './assets/sass/main.scss';

function renderApp(){
  let appElement = document.getElementById('bloodbanks');
  let classNames = appElement.className;
  ReactDOM.render(<BloodBanksContainer />, appElement);
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  renderApp();
}else {
  document.addEventListener('DOMContentLoaded', renderApp);
}
