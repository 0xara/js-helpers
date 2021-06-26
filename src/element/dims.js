
import { capitalize } from "../string/capitalize";

import { getElm } from "./element";

const margins = {
	width(el_style) {
		return parseFloat(el_style['marginLeft']) +
			parseFloat(el_style['marginRight']);
	},
	height(el_style) {
		return parseFloat(el_style['marginTop']) +
			parseFloat(el_style['marginBottom']);
	}
};

function getWithOrHeight(el, type, margin = true) {
	el = getElm(el);

	const cType = capitalize(type);

	var el_style      = window.getComputedStyle(el),
		el_display    = el_style.display,
		el_position   = el_style.position,
		el_visibility = el_style.visibility,
		el_max = el_style[`max${cType}`].replace('px', '').replace('%', ''),

		wanted = 0;

	// if its not hidden we just return normal height
	if(el_display !== 'none' && el_max !== '0') {
		return Math.ceil(el[`offset${cType}`] + (margin ? margins[type](el_style) : 0));
	}

	// the element is hidden so:
	// making the el block so we can meassure its height but still be hidden
	el.style.position   = 'absolute';
	el.style.visibility = 'hidden';
	el.style.display    = 'block';

	wanted  = Math.ceil(el[`offset${cType}`] + (margin ? margins[type](el_style) : 0));

	// reverting to the original values
	el.style.display    = el_display;
	el.style.position   = el_position;
	el.style.visibility = el_visibility;

	return wanted;
}

export function getWidth(el, margin = false) {
	return getWithOrHeight(el, 'width', margin);
}

export function getHeight(el, margin = false) {
	return getWithOrHeight(el, 'height', margin);
}