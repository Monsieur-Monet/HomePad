import { TestComponent } from './components/test.component.js';
import { componentFactory } from './component-factory.js';
import { awaitDOM } from './helpers/sleep.js';

awaitDOM().then(() => {
  const instances = componentFactory([
    TestComponent,
  ]);
})

