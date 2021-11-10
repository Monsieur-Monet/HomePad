import BackgroundComponent from './components/background.component.js';
import { awaitDOM } from './helpers/sleep.js';

awaitDOM().then(_ => {
  BackgroundComponent();
});
