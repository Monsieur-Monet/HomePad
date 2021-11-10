import { $ } from '../helpers/query-selector.js';
import { awaitLoad } from '../helpers/sleep.js';

export default async function BackgroundComponent() {
  const [img] = $('data-bg');
  const [overlay] = $('data-overlay');

  if (!img.complete) {
    await awaitLoad(img);
  }

  overlay.classList.add('hide');
}
