

import { getElm } from "./element";

export function removeElement(el) {
    el = getElm(el);
    el.parentNode.removeChild(el);
}
