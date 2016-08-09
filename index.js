import React from 'react';
import ReactDOM from 'react-dom';
import BloodBanks from './components/BloodBanks';

document.addEventListener('DOMContentLoaded', function () {
  let appElement = document.getElementById('app');
  let classNames = appElement.className;
  ReactDOM.render(<BloodBanks />, appElement);
});