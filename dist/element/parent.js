import { getElm } from './element.js';
import '../core/toType.js';
import './closestAndMatchesPolyfill.js';
import { is } from './is.js';

function parents(el, sel) {
	// noinspection StatementWithEmptyBodyJS
	el = getElm(el);

	var list = [];

	while (el = el.parentElement) {

		if (sel) {
			if (!is(el, sel)) continue;
		}

		list.push(el);
	}

	return list;
}

function parent(el) {
	var sel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	el = getElm(el);
	var elm = el.parentElement;

	if (sel) {
		if (is(elm, sel)) {
			return elm;
		}
		return null;
	}
	return elm;
}

export { parents, parent };
