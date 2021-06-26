
import './closestAndMatchesPolyfill';
import { is } from './is'

export function childrenIs(el, sel) {
	return Array.prototype.filter.call(el.children, function (child){
		return is(child, sel);
	});
}