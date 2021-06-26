import { getElm } from './element.js';

if (window) {
	/** IE9 polyfill */
	(function (arr) {
		arr.forEach(function (item) {
			if (item.hasOwnProperty('previousElementSibling')) {
				return;
			}
			Object.defineProperty(item, 'previousElementSibling', {
				configurable: true,
				enumerable: true,
				get: function get() {
					var el = this;
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

function previousSibling(el) {
	el = getElm(el);
	return el ? el.previousElementSibling : null;
}

export { previousSibling };
