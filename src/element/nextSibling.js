
import { getElm } from "./element";

if(window) {
	/** IE9 polyfill */
	(function (arr) {
		arr.forEach(function (item) {
			if (item.hasOwnProperty('nextElementSibling')) {
				return;
			}
			Object.defineProperty(item, 'nextElementSibling', {
				configurable: true,
				enumerable: true,
				get: function () {
					var el = this;
					while (el = el.nextSibling) {
						if (el.nodeType === 1) {
							return el;
						}
					}
					return null;
				},
				set: undefined
			});
		});
	})([Element.prototype, CharacterData.prototype]);
}

export function nextSibling(el) {
	el = getElm(el);
	return el ? el.nextElementSibling : null;
}
