import React from 'react';
import ReactDOM from 'react-dom';
import BloodBanksContainer from './components/BloodBanksContainer';

import './assets/sass/main.scss';

document.addEventListener('DOMContentLoaded', function () {
  let appElement = document.getElementById('bloodbanks');
  let classNames = appElement.className;
  ReactDOM.render(<BloodBanksContainer />, appElement);
});