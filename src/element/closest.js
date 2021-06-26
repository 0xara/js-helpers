
import './closestAndMatchesPolyfill';

export function closest(el, sel) {
	return el.closest(sel);
}