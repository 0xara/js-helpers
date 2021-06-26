import './closestAndMatchesPolyfill.js';

function closest(el, sel) {
	return el.closest(sel);
}

export { closest };
