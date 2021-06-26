
import { is } from './is'

import { getElm } from "./element";

export function parents(el, sel) {
	// noinspection StatementWithEmptyBodyJS
	el = getElm(el);

	const list = [];

	while ((el = el.parentElement)) {

		if(sel) {
			if(!is(el, sel)) continue;
		}

		list.push(el);
	}

	return list;
}

export function parent(el, sel = null) {
	el = getElm(el);
	const elm = el.parentElement;

	if(sel) {
		if(is(elm,sel)) {
			return elm;
		}
		return null;
	}
	return elm;
}