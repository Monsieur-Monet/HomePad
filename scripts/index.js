import BackgroundComponent from './components/background.component.js';
import { awaitDOM } from './helpers/sleep.js';

awaitDOM().then(_ => {
  BackgroundComponent();
  Greeter();
});

function Greeter() {
  const greetValue = Math.floor(Math.random() * 5) + 1;
  if (greetValue === 1) {
    let paragraph = document.getElementById('greet');
    let greet = document.createTextNode('Hey!');
    paragraph.appendChild(greet);
  } else if (greetValue === 2) {
    let paragraph = document.getElementById('greet');
    let greet = document.createTextNode('Hello!');
    paragraph.appendChild(greet);
  } else if (greetValue === 3) {
    let paragraph = document.getElementById('greet');
    let greet = document.createTextNode('Good Day!');
    paragraph.appendChild(greet);
  } else if (greetValue === 4) {
    let paragraph = document.getElementById('greet');
    let greet = document.createTextNode('Hello There!');
    paragraph.appendChild(greet);
  } else if (greetValue === 5) {
    let paragraph = document.getElementById('greet');
    let greet = document.createTextNode('Hi There!');
    paragraph.appendChild(greet);
  }
}
