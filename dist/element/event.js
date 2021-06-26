import { getElm } from './element.js';

function addListener(el, events, fn) {
	el = getElm(el);
	events.split(' ').forEach(function (e) {
		return el.addEventListener(e, fn, false);
	});
}

function removeListener(el, events, fn) {
	el = getElm(el);
	events.split(' ').forEach(function (e) {
		return el.removeEventListener(e, fn, false);
	});
}

export { addListener, removeListener };
