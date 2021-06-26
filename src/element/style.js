
import { camelize } from './../string/camelize';
import { hyphenate } from './../string/hyphenate';
import { isPlainObject } from './../object/isPlainObject';
import { each } from './../core/each';

import { getElm } from "./element";

const cssVarRE = /^--/;
const importantRE = /\s*!important$/;
export function addStyle (el, name, val) {
	el = getElm(el);

	if(isPlainObject(name)) {
		each(name,(k,v) =>{
			addStyle(el, k, v);
		});
		return;
	}

	val = val == null ? '' : val;
	/* istanbul ignore if */
	if (cssVarRE.test(name)) {
		el.style.setProperty(name, val);
	} else if (importantRE.test(val)) {
		el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
	} else {
		var normalizedName = normalize(name);
		if (Array.isArray(val)) {
			// Support values array created by autoprefixer, e.g.
			// {display: ["-webkit-box", "-ms-flexbox", "flex"]}
			// Set them one by one, and the browser will only set those it can recognize
			for (var i = 0, len = val.length; i < len; i++) {
				el.style[normalizedName] = val[i];
			}
		} else {
			el.style[normalizedName] = val;
		}
	}
}

export function removeStyle(el,name) {
	addStyle(el,name,null);
}


const vendorNames = ['Webkit', 'Moz', 'ms'];

let emptyStyle;
function normalize(prop) {
	emptyStyle = emptyStyle || document.createElement('div').style;
	prop = camelize(prop);
	if (prop !== 'filter' && (prop in emptyStyle)) {
		return prop
	}
	var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
	for (var i = 0; i < vendorNames.length; i++) {
		var name = vendorNames[i] + capName;
		if (name in emptyStyle) {
			return name
		}
	}
}