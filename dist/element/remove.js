import { getElm } from './element.js';

function removeElement(el) {
    el = getElm(el);
    el.parentNode.removeChild(el);
}

export { removeElement };
