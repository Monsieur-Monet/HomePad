export const componentFactory = klasses => klasses.reduce((prev, Curr) => {
  const instance = new Curr();
  return { ...prev, [instance.constructor.name]: instance };
}, {});
