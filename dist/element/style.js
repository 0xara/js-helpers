import { getElm } from './element.js';
import '../core/isWindow.js';
import '../core/toType.js';
import '../array/isArrayLike.js';
import { each } from '../core/each.js';
import { camelize } from '../string/camelize.js';
import { hyphenate } from '../string/hyphenate.js';
import { isPlainObject } from '../object/isPlainObject.js';

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
function addStyle(el, name, val) {
	el = getElm(el);

	if (isPlainObject(name)) {
		each(name, function (k, v) {
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

function removeStyle(el, name) {
	addStyle(el, name, null);
}

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle = void 0;
function normalize(prop) {
	emptyStyle = emptyStyle || document.createElement('div').style;
	prop = camelize(prop);
	if (prop !== 'filter' && prop in emptyStyle) {
		return prop;
	}
	var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
	for (var i = 0; i < vendorNames.length; i++) {
		var name = vendorNames[i] + capName;
		if (name in emptyStyle) {
			return name;
		}
	}
}

export { addStyle, removeStyle };
