import { getElm } from './element.js';

function visible(el) {
  el = getElm(el);
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

function hidden(el) {
  el = getElm(el);
  return !visible(el);
}

export { visible, hidden };
