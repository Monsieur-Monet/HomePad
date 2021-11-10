export const sleep = delayInMs => {
  return new Promise(resolve => {
    setTimeout(resolve, delayInMs);
  });
};

export const awaitDOM = _ => {
  return new Promise(resolve => {
    document.addEventListener('DOMContentLoaded', resolve);
  });
};

export const awaitLoad = elem => {
  return new Promise(resolve => {
    elem.addEventListener('load', resolve);
  })
}
