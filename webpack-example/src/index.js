import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import img from './img.png';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  const myImg = new Image();
  myImg.src = img;
  element.appendChild(myImg);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());