/** matches & closest polyfill together  **/
/** https://github.com/jonathantneal/closest.git **/

var elementClosest = function polyfill(window) {
	var ElementPrototype = window.Element.prototype;

	if (typeof ElementPrototype.matches !== 'function') {
		ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementPrototype.closest !== 'function') {
		ElementPrototype.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
};

if (window) {
	elementClosest(window);
}
