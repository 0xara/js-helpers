
import './closestAndMatchesPolyfill';

import { getElm } from "./element";
import { toType } from './../core/toType';

export function is(el, sel) {
	el = getElm(el);

	if(toType(sel) !== 'string')
		return el === sel;

	return (el.matches).call(el,sel);
}