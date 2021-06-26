import { getElm } from './element.js';
import { toType } from '../core/toType.js';
import './closestAndMatchesPolyfill.js';

function is(el, sel) {
	el = getElm(el);

	if (toType(sel) !== 'string') return el === sel;

	return el.matches.call(el, sel);
}

export { is };
