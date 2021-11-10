export function $(dataAttrSelector) {
  return document.querySelectorAll(`[${dataAttrSelector}]`);
}
