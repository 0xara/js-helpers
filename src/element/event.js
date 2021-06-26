

import { getElm } from "./element";

export function addListener(el,events,fn) {
	el = getElm(el);
	events.split(' ').forEach(e => el.addEventListener(e, fn, false));
}

export function removeListener(el,events,fn) {
	el = getElm(el);
	events.split(' ').forEach(e => el.removeEventListener(e, fn, false));
}