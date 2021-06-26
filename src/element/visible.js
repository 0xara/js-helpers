
import { getElm } from "./element";

export function visible(el) {
	el = getElm(el);
    return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

export function hidden(el) {
	el = getElm(el);
    return !visible(el);
}
