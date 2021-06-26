
import { getElm } from "./element";

if(window) {
	/** IE9 polyfill */
	(function (arr) {
		arr.forEach(function (item) {
			if (item.hasOwnProperty('previousElementSibling')) {
				return;
			}
			Object.defineProperty(item, 'previousElementSibling', {
				configurable: true,
				enumerable: true,
				get: function () {
					let el = this;
					while (el = el.previousSibling) {
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


export function previousSibling(el) {
	el = getElm(el);
	return el ? el.previousElementSibling : null;
}