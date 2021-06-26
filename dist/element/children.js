import './element.js';
import '../core/toType.js';
import './closestAndMatchesPolyfill.js';
import { is } from './is.js';

function childrenIs(el, sel) {
	return Array.prototype.filter.call(el.children, function (child) {
		return is(child, sel);
	});
}

export { childrenIs };
