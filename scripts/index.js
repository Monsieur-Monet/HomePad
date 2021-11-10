import TestComponent from './components/test.component.js';
import { awaitDOM } from './helpers/sleep';

awaitDOM().then(_ => {
  TestComponent();
});
