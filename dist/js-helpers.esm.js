import 'raf/polyfill';

/* eslint-disable no-param-reassign */

function recurseWithDelayDown($element, startFrom, stopAt) {
    window.setTimeout(function () {
        if (startFrom > stopAt) {
            startFrom -= 0.1;
            recurseWithDelayDown($element, startFrom, stopAt);
            $element.style.opacity = startFrom;
        } else {
            $element.style.display = 'none';
        }
    }, 30);
}

function recurseWithDelayUp($element, startFrom, stopAt) {
    window.setTimeout(function () {
        if (startFrom < stopAt) {
            startFrom += 0.1;
            recurseWithDelayUp($element, startFrom, stopAt);
            $element.style.opacity = startFrom;
        } else {
            $element.style.display = 'block';
        }
    }, 30);
}

function fadeIn($element) {
    $element.style.display = 'block';
    $element.style.opacity = 0;
    recurseWithDelayUp($element, 0, 1);
}

function fadeOut($element) {
    $element.style.display = 'block';
    $element.style.opacity = 1;
    recurseWithDelayDown($element, 1, 0);
}

function getElm(el) {
	return typeof el === 'string' ? document.querySelector(el) : el;
}

/**
 * Capitalize a string.
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var margins = {
	width: function width(el_style) {
		return parseFloat(el_style['marginLeft']) + parseFloat(el_style['marginRight']);
	},
	height: function height(el_style) {
		return parseFloat(el_style['marginTop']) + parseFloat(el_style['marginBottom']);
	}
};

function getWithOrHeight(el, type) {
	var margin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	el = getElm(el);

	var cType = capitalize(type);

	var el_style = window.getComputedStyle(el),
	    el_display = el_style.display,
	    el_position = el_style.position,
	    el_visibility = el_style.visibility,
	    el_max = el_style["max" + cType].replace('px', '').replace('%', ''),
	    wanted = 0;

	// if its not hidden we just return normal height
	if (el_display !== 'none' && el_max !== '0') {
		return Math.ceil(el["offset" + cType] + (margin ? margins[type](el_style) : 0));
	}

	// the element is hidden so:
	// making the el block so we can meassure its height but still be hidden
	el.style.position = 'absolute';
	el.style.visibility = 'hidden';
	el.style.display = 'block';

	wanted = Math.ceil(el["offset" + cType] + (margin ? margins[type](el_style) : 0));

	// reverting to the original values
	el.style.display = el_display;
	el.style.position = el_position;
	el.style.visibility = el_visibility;

	return wanted;
}

function getWidth(el) {
	var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	return getWithOrHeight(el, 'width', margin);
}

function getHeight(el) {
	var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	return getWithOrHeight(el, 'height', margin);
}

/* eslint-disable no-param-reassign,no-cond-assign */

function getElm$1(el) {
    return typeof el === 'string' ? document.querySelector(el) : el;
}

function hasClass(el, cls) {
    el = getElm$1(el);
    return new RegExp('(\\s|^)' + cls + '(\\s|$)').test(el.className);
}

function addClass(el, cls) {
    el = getElm$1(el);
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }

    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(/\s+/).forEach(function (c) {
                return el.classList.add(c);
            });
        } else {
            el.classList.add(cls);
        }
    } else {
        var cur = ' ' + (el.getAttribute('class') || '') + ' ';
        if (cur.indexOf(' ' + cls + ' ') < 0) {
            el.setAttribute('class', (cur + cls).trim());
        }
    }
}

function removeClass(el, cls) {
    el = getElm$1(el);
    /* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }

    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(/\s+/).forEach(function (c) {
                return el.classList.remove(c);
            });
        } else {
            el.classList.remove(cls);
        }
        if (!el.classList.length) {
            el.removeAttribute('class');
        }
    } else {
        var cur = ' ' + (el.getAttribute('class') || '') + ' ';
        var tar = ' ' + cls + ' ';
        while (cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ');
        }
        cur = cur.trim();
        if (cur) {
            el.setAttribute('class', cur);
        } else {
            el.removeAttribute('class');
        }
    }
}

function toggleClass(el, cls) {
    el = getElm$1(el);
    hasClass(el, cls) ? removeClass(el, cls) : addClass(el, cls);
}

function inArray(elem, arr) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    var len = void 0;

    if (arr) {
        if (Array.prototype.indexOf) {
            return Array.prototype.indexOf.call(arr, elem, i);
        }

        len = arr.length;
        if (i) {
            i = i < 0 ? Math.max(0, len + i) : i;
        }

        for (; i < len; i++) {
            // Skip accessing in sparse arrays
            if (i in arr && arr[i] === elem) {
                return i;
            }
        }
    }

    return -1;
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function calculate(el, _ref) {
	var time = _ref.time,
	    options = _objectWithoutProperties(_ref, ["time"]);

	var height = getHeight(el);
	if (!time) {
		time = height / 3 + 150;
	}
	var currHeight = el.clientHeight * (getComputedStyle(el).display !== 'none');

	var _ref2 = [].concat(_toConsumableArray(currHeight > height / 2 ? [height, 0] : [0, height])),
	    start = _ref2[0],
	    end = _ref2[1];

	return _extends({}, options, { el: el, time: time, start: start, end: end });
}

function toggle(_ref3) {
	var el = _ref3.el,
	    _ref3$type = _ref3.type,
	    type = _ref3$type === undefined ? 'toggle' : _ref3$type,
	    _ref3$className = _ref3.className,
	    className = _ref3$className === undefined ? 'open' : _ref3$className,
	    options = _objectWithoutProperties(_ref3, ["el", "type", "className"]);

	el = getElm(el);

	var calc = calculate(el, options);
	var end = calc.end;


	if (type === 'slideUp' && end !== 0) return;
	if (type === 'slideDown' && end === 0) return;

	end === 0 ? removeClass(el, className) : addClass(el, className);
	// el.classList[ end === 0 ? 'remove' : 'add' ]('open');
	el.style.setProperty('overflow', 'hidden');
	el.style.setProperty('display', 'block');
	// el.style.cssText = "overflow: hidden; display: block;";

	applyRepeat(calc);
}

function slideUp(options) {
	toggle(_extends({}, options, { type: 'slideUp' }));
}

function slideDown(options) {
	toggle(_extends({}, options, { type: 'slideDown' }));
}

function applyRepeat(_ref4) {
	var el = _ref4.el,
	    time = _ref4.time,
	    start = _ref4.start,
	    end = _ref4.end,
	    onStep = _ref4.onStep,
	    onStart = _ref4.onStart,
	    onEnd = _ref4.onEnd;


	var disp = end - start;

	var init = new Date().getTime();

	var repeat = function repeat() {
		var needle = void 0;
		var instance = new Date().getTime() - init;
		var step = start + disp * instance / time;
		if (instance <= time) {
			el.style.setProperty('height', step + 'px');
			onStep && onStep(step);
			// el.style.height = step + 'px'; // if Math.floor(step) in [start..end]
		} else {
			el.style.setProperty('height', null);
			el.style.setProperty('overflow', null);
			el.style.setProperty('display', end === 0 ? 'none' : 'block');
			//el.style.cssText = `display: ${end === 0 ? 'none' : 'block'}`;
			onEnd && onEnd();
		}

		var repeatLoop = requestAnimationFrame(repeat);
		if (needle = Math.floor(step), inArray(needle, [].concat(_toConsumableArray(__range__(start, end, true)))) === -1) {
			return cancelAnimationFrame(repeatLoop);
		}
	};

	onStart && onStart();

	return repeat();
}

function __range__(left, right, inclusive) {
	var range = [];
	var ascending = left < right;
	var end = !inclusive ? right : ascending ? right + 1 : right - 1;
	for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
		range.push(i);
	}
	return range;
}

function arrayMove(list, oldIndex, newIndex) {
    var tmp = list[oldIndex];
    list.splice(oldIndex, 1);
    list.splice(newIndex, 0, tmp);

    return list;
}

function isWindow(obj) {
    /* jshint eqeqeq: false */
    return obj != null && obj == obj.window;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable no-plusplus */

var class2type = {};

var types = 'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' ');

for (var i = 0; i < types.length; ++i) {
    var name = types[i];
    class2type['[object ' + name + ']'] = name.toLowerCase();
}

function toType(obj) {
    if (obj == null) {
        return '' + obj;
    }

    // Support: Android <=2.3 only (functionish RegExp)
    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function' ? class2type[Object.prototype.toString.call(obj)] || 'object' : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
}

function isArrayLike(obj) {
    // Support: iOS 8.2 (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && 'length' in obj && obj.length;
    var type = toType(obj);

    if (type === 'function' || isWindow(obj)) {
        return false;
    }

    return (type === 'array' || length === 0 || typeof length === 'number') && length > 0 && length - 1 in obj;
}

/* eslint-disable */
function each(obj, callback) {
    var length = void 0,
        i = 0;

    if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                break;
            }
        }
    } else {
        for (i in obj) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                break;
            }
        }
    }

    return obj;
}

function forEach(arr, callback) {
    return each(arr, callback);
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

var dispatchTypeEquals = {
	array: arraysEqual,
	object: function object(a, b) {
		if (Object.getPrototypeOf(a) === Object.prototype && Object.getPrototypeOf(b) === Object.prototype) return objectsEqual(a, b);
		if (a instanceof Map && b instanceof Map) return mapsEqual(a, b);
		if (a instanceof Set && b instanceof Set) throw "Error: set equality by hashing not implemented.";
		if ((a instanceof ArrayBuffer || ArrayBuffer.isView(a)) && (b instanceof ArrayBuffer || ArrayBuffer.isView(b))) return typedArraysEqual(a, b);
	},
	number: function number(a, b) {
		return a === b;
	},
	string: function string(a, b) {
		return a === b;
	},
	boolean: function boolean(a, b) {
		return a === b;
	}
};

function deepEquals(a, b) {
	var typeA = toType(a);
	return typeA === toType(b) && dispatchTypeEquals[typeA](a, b);
}

function arraysEqual(a, b) {
	if (a.length != b.length) return false;
	for (var i = 0; i < a.length; i++) {
		if (!deepEquals(a[i], b[i])) return false;
	}return true;
}
function objectsEqual(a, b) {
	var aKeys = Object.getOwnPropertyNames(a);
	var bKeys = Object.getOwnPropertyNames(b);
	if (aKeys.length != bKeys.length) return false;
	aKeys.sort();
	bKeys.sort();
	for (var i = 0; i < aKeys.length; i++) {
		if (aKeys[i] != bKeys[i]) // keys must be strings
			return false;
	}return deepEquals(aKeys.map(function (k) {
		return a[k];
	}), aKeys.map(function (k) {
		return b[k];
	}));
}
function mapsEqual(a, b) {
	if (a.size != b.size) return false;
	var aPairs = Array.from(a);
	var bPairs = Array.from(b);
	aPairs.sort(function (x, y) {
		return x[0] < y[0];
	});
	bPairs.sort(function (x, y) {
		return x[0] < y[0];
	});
	for (var i = 0; i < a.length; i++) {
		if (!deepEquals(aPairs[i][0], bPairs[i][0]) || !deepEquals(aPairs[i][1], bPairs[i][1])) return false;
	}return true;
}
function typedArraysEqual(a, b) {
	a = new Uint8Array(a);
	b = new Uint8Array(b);
	if (a.length != b.length) return false;
	for (var i = 0; i < a.length; i++) {
		if (a[i] != b[i]) return false;
	}return true;
}

function isBoolean(val) {
    return toType(val) === 'boolean';
}

function isNumeric(obj) {
    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    // adding 1 corrects loss of precision from parseFloat (#15100)
    var realStringObj = obj && obj.toString();
    return !isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
}

function isFloat(num) {
    return isNumeric(num) && num % 1 !== 0;
}

function isFunction(obj) {
    return typeof obj === 'function' && typeof obj.nodeType !== 'number';
}

function isInteger(num) {
    return isNumeric(num) && Math.floor(num) == +num;
}

function isJson(val) {
    try {
        JSON.parse(val);
    } catch (e) {
        return false;
    }
    return true;
}

function isMobile() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    );
}

function isString(val) {
    return toType(val) === 'string';
}

function isFile(val) {
    return val instanceof File;
}

function isFileList(val) {
    return val instanceof FileList;
}

function isBlob(val) {
    return val instanceof Blob;
}

/**
 * note that in FF "false < 9" is "true". So, condition should be if (isIE () && isIE () < 9) {
 *
 * @returns {any}
 */

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

function is(el, sel) {
	el = getElm(el);

	if (toType(sel) !== 'string') return el === sel;

	return el.matches.call(el, sel);
}

function childrenIs(el, sel) {
	return Array.prototype.filter.call(el.children, function (child) {
		return is(child, sel);
	});
}

function closest(el, sel) {
	return el.closest(sel);
}

function addListener(el, events, fn) {
	el = getElm(el);
	events.split(' ').forEach(function (e) {
		return el.addEventListener(e, fn, false);
	});
}

function removeListener(el, events, fn) {
	el = getElm(el);
	events.split(' ').forEach(function (e) {
		return el.removeEventListener(e, fn, false);
	});
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
}

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
function hyphenate(str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
}

function isPlainObject(obj) {
    var key = void 0;

    // Must be an Object.
    // Because of IE, we also have to check the presence of the constructor property.
    // Make sure that DOM nodes and window objects don't pass through, as well
    if (!obj || toType(obj) !== 'object' || obj.nodeType || isWindow(obj)) {
        return false;
    }

    try {
        // Not own constructor property must be Object
        if (obj.constructor && !Object.prototype.hasOwnProperty.call(obj, 'constructor') && !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
            return false;
        }
    } catch (e) {
        // IE8,9 Will throw exceptions on certain host objects #9897
        return false;
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    for (key in obj) {}

    return key === undefined || Object.prototype.hasOwnProperty.call(obj, key);
}

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

function removeElement(el) {
    el = getElm(el);
    el.parentNode.removeChild(el);
}

function visible(el) {
  el = getElm(el);
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}

function hidden(el) {
  el = getElm(el);
  return !visible(el);
}

function parents(el, sel) {
	// noinspection StatementWithEmptyBodyJS
	el = getElm(el);

	var list = [];

	while (el = el.parentElement) {

		if (sel) {
			if (!is(el, sel)) continue;
		}

		list.push(el);
	}

	return list;
}

function parent(el) {
	var sel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	el = getElm(el);
	var elm = el.parentElement;

	if (sel) {
		if (is(elm, sel)) {
			return elm;
		}
		return null;
	}
	return elm;
}

if (window) {
	/** IE9 polyfill */
	(function (arr) {
		arr.forEach(function (item) {
			if (item.hasOwnProperty('nextElementSibling')) {
				return;
			}
			Object.defineProperty(item, 'nextElementSibling', {
				configurable: true,
				enumerable: true,
				get: function get() {
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

function nextSibling(el) {
	el = getElm(el);
	return el ? el.nextElementSibling : null;
}

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

function copyToClipboard(val) {
	var el = document.createElement("textarea");
	el.id = "textareaTemp";
	el.style.position = "fixed";
	el.style.opacity = 0;
	el.value = val;
	document.body.appendChild(el);
	if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
		var editable = el.contentEditable;
		var readOnly = el.readOnly;
		el.contentEditable = true;
		el.readOnly = false;
		var range = document.createRange();
		range.selectNodeContents(el);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
		el.setSelectionRange(0, 999999);
		el.contentEditable = editable;
		el.readOnly = readOnly;
	} else {
		el.select();
	}

	var copied = true;
	try {
		document.execCommand('copy');
	} catch (e) {
		copied = false;
	} finally {
		document.body.removeChild(el);
	}
	return copied;
}

function debounce(fn, delay) {
	var timeoutID = null;
	return function () {
		clearTimeout(timeoutID);
		var args = arguments;
		var that = this;
		timeoutID = setTimeout(function () {
			fn.apply(that, args);
		}, delay);
	};
}

function getOldBrowserInnerWidth() {
    return document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
}

function getOldBrowserInnerHeight() {
    return document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;
}

function popupCenter(url, title, w, h) {
    var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};

    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    var width = window.innerWidth ? window.innerWidth : getOldBrowserInnerWidth();
    var height = window.innerHeight ? window.innerHeight : getOldBrowserInnerHeight();

    var left = width / 2 - w / 2 + dualScreenLeft;
    var top = height / 2 - h / 2 + dualScreenTop;
    var newWindow = window.open(url, title, "scrollbars=yes, width=" + w + ", height=" + h + ", top=" + top + ", left=" + left);

    callback(newWindow);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }

    return newWindow;
}

function getRandomDarkColor() {
    var letters = '012345'.split('');

    var color = letters[Math.round(Math.random() * 5)];

    letters = '0123456789ABCDEF'.split('');

    for (var i = 0; i < 5; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }

    return '#' + color;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');

    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function pushHash(path) {
    window.location.hash = path;
}

function getHash() {
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    var href = window.location.href;
    var index = href.indexOf('#');
    return index === -1 ? '' : href.slice(index + 1);
}

function replaceHash(path) {
    var href = window.location.href;
    var i = href.indexOf('#');
    var base = i >= 0 ? href.slice(0, i) : href;
    window.location.replace(base + '#' + path);
}

function ensureHashSlash() {
    var path = getHash();
    if (path.charAt(0) === '/') {
        return true;
    }
    replaceHash('/' + path);
    return false;
}

function tryParseJson(val) {
    if (toType(val) !== 'string') return val;

    try {
        return JSON.parse(val);
    } catch (e) {
        return val;
    }
}

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function cloneDeep(object) {
    if (object === null) return null;

    if (object instanceof Date) return new Date(object);

    if (object instanceof RegExp) return new RegExp(object.source, object.flags);

    if (Array.isArray(object) || (typeof object === 'undefined' ? 'undefined' : _typeof$1(object)) === 'object') {
        var clone = Array.isArray(object) ? [] : {};

        Object.keys(object).forEach(function (key) {
            clone[key] = cloneDeep(object[key]);
        });

        return clone;
    }

    return object;
}

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable */
function extend() {
	var options,
	    name,
	    src,
	    copy,
	    copyIsArray,
	    clone,
	    target = arguments[0] || {},
	    i = 1,
	    length = arguments.length,
	    deep = false;

	// Handle a deep copy situation
	if (typeof target === "boolean") {
		deep = target;

		// Skip the boolean and the target
		target = arguments[i] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ((typeof target === 'undefined' ? 'undefined' : _typeof$2(target)) !== "object" && !isFunction(target)) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if (i === length) {
		target = this;
		i--;
	}

	for (; i < length; i++) {

		// Only deal with non-null/undefined values
		if ((options = arguments[i]) != null) {

			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target === copy) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

					if (copyIsArray) {
						copyIsArray = false;
						clone = src && Array.isArray(src) ? src : [];
					} else {
						clone = src && isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
				} else if (copy !== undefined) {
					target[name] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
}

function hasOwnProperty(obj, property) {
    return Object.prototype.hasOwnProperty.call(obj, property);
}

function isEmptyObject(obj) {
    /* eslint-disable no-unused-vars */
    // See https://github.com/eslint/eslint/issues/6125
    var name = void 0;

    for (name in obj) {
        return false;
    }
    return true;
}

function merge(a, b) {
    Object.keys(b).forEach(function (key) {
        a[key] = cloneDeep(b[key]);
    });
}

function cleanArray(value, acceptEmptyString) {
    var final = isArray(value) ? [] : {};

    each(value, function (key, val) {
        var cleaned = cleanData(val, acceptEmptyString);

        if (toType(cleaned) === 'undefined') return true;

        final[key] = cleaned;
    });

    return final;
}

function cleanValue(value, acceptEmptyString) {
    var final = isString(value) ? value.trim() : value;

    if (final == '' && acceptEmptyString) return final;

    return !final ? undefined : final;
}

function cleanData(value) {
    var acceptEmptyString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (isNumeric(value)) return +value;

    if (isBoolean(value)) return value;

    if (toType(value) == 'function' && !isPlainObject(value)) return value;

    return isArray(value) || isPlainObject(value) ? cleanArray(value, acceptEmptyString) : cleanValue(value, acceptEmptyString);
}

function cleanDataInclude(value) {
    cleanData(value, true);
}

function encodeQueryData(data) {
	var s = [];

	each(data, function (k, v) {
		var key = encodeURIComponent(k);

		if (isArray(v)) {
			each(v, function (vItem) {
				s.push(key + '[]=' + encodeURIComponent(vItem));
			});
		} else {
			s.push(key + '=' + encodeURIComponent(v));
		}
	});

	return s.join('&');
}

function decodeQueryData(query) {
	var chunks = query.split('&');
	var params = {};

	for (var i = 0; i < chunks.length; i++) {
		var chunk = chunks[i].split('=');
		if (chunk[0].search("\\[\\]") !== -1) {
			if (typeof params[chunk[0]] === 'undefined') {
				params[chunk[0]] = [decodeURIComponent(chunk[1])];
			} else {
				params[chunk[0]].push(decodeURIComponent(chunk[1]));
			}
		} else {
			params[chunk[0]] = decodeURIComponent(chunk[1]);
		}
	}

	return params;
}

function removeQueryString(url) {
	return url.split('?')[0];
}

function isPersianNumeric(val) {
	return (/^[٠۰ ١۱ ٢۲ ٣۳ ٤۴ ٥۵ ٦۶ ٧۷ ٨۸ ٩۹]$/.test(val)
	);
}

function isPersianAlphabet(val) {
	return (/^[\u0600-\u0605 ؐ-ؚ\u061Cـ ۖ-\u06DD ۟-ۤ ۧ ۨ ۪-ۭ ً-ٕ ٟ ٖ-ٞ ٰ ، ؍ ٫ ٬ ؛ ؞ ؟ ۔ ٭ ٪ ؉ ؊ ؈ ؎ ؏۞ ۩ ؆ ؇ ؋ ءٴ۽ آ أ ٲ ٱ ؤ إ ٳ ئ ا ٵ ٮ ب ٻ پ ڀة-ث ٹ ٺ ټ ٽ ٿ ج ڃ ڄ چ ڿ ڇ ح خ ځ ڂ څ د ذ ڈ-ڐ ۮ ر ز ڑ-ڙ ۯ س ش ښ-ڜ ۺ ص ض ڝ ڞۻ ط ظ ڟ ع غ ڠ ۼ ف ڡ-ڦ ٯ ق ڧ ڨ ك ک-ڴ ػ ؼ ل ڵ-ڸ م۾ ن ں-ڽ ڹ ه ھ ہ-ۃ ۿ ەۀ وۥ ٶۄ-ۇ ٷ ۈ-ۋ ۏ ى يۦ ٸ ی-ێ ې ۑ ؽ-ؿ ؠ ے ۓ \u061D]+$/.test(val)
	);
}

function isPersianAlphaNumeric(val) {
	return (/^[\u0600-\u0605 ؐ-ؚ\u061Cـ ۖ-\u06DD ۟-ۤ ۧ ۨ ۪-ۭ ً-ٕ ٟ ٖ-ٞ ٰ ، ؍ ٫ ٬ ؛ ؞ ؟ ۔ ٭ ٪ ؉ ؊ ؈ ؎ ؏۞ ۩ ؆ ؇ ؋ ٠۰ ١۱ ٢۲ ٣۳ ٤۴ ٥۵ ٦۶ ٧۷ ٨۸ ٩۹ ءٴ۽ آ أ ٲ ٱ ؤ إ ٳ ئ ا ٵ ٮ ب ٻ پ ڀة-ث ٹ ٺ ټ ٽ ٿ ج ڃ ڄ چ ڿ ڇ ح خ ځ ڂ څ د ذ ڈ-ڐ ۮ ر ز ڑ-ڙ ۯ س ش ښ-ڜ ۺ ص ض ڝ ڞۻ ط ظ ڟ ع غ ڠ ۼ ف ڡ-ڦ ٯ ق ڧ ڨ ك ک-ڴ ػ ؼ ل ڵ-ڸ م۾ ن ں-ڽ ڹ ه ھ ہ-ۃ ۿ ەۀ وۥ ٶۄ-ۇ ٷ ۈ-ۋ ۏ ى يۦ ٸ ی-ێ ې ۑ ؽ-ؿ ؠ ے ۓ \u061D]+$/.test(val)
	);
}

function faToEnNumber(val) {
    var enValue = '';

    for (var i = 0; i < val.length; i++) {
        var ch = val.charCodeAt(i);

        if (ch >= 1776 && ch <= 1785) // For Persian digits.
            {
                var newChar = ch - 1728;

                enValue += String.fromCharCode(newChar);
            } else if (ch >= 1632 && ch <= 1641) // For Arabic & Unix digits.
            {
                var _newChar = ch - 1584;

                enValue += String.fromCharCode(_newChar);
            } else {
            enValue += String.fromCharCode(ch);
        }
    }

    return enValue;
}

/** polyfill */
if (Number.isFinite === undefined) Number.isFinite = function (value) {
    return typeof value === 'number' && isFinite(value);
};

function currencyToNumber(val) {
    var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var enValue = faToEnNumber(val);

    var number = +enValue.replace(/[^\d.]/g, '');

    if (Number.isNaN(number)) return 0;

    var value = parseFloat(number);

    if (!Number.isFinite(value) || !value && value !== 0) return '';

    return isInteger(value) ? value : value.toFixed(decimal);
}

function enToFaNumber(val) {
    if (typeof val === 'undefined') {
        return '';
    }

    var value = val;

    value = '' + value;

    value = value.replace(/0/g, '۰');
    value = value.replace(/1/g, '۱');
    value = value.replace(/2/g, '۲');
    value = value.replace(/3/g, '۳');
    value = value.replace(/4/g, '۴');
    value = value.replace(/5/g, '۵');
    value = value.replace(/6/g, '۶');
    value = value.replace(/7/g, '۷');
    value = value.replace(/8/g, '۸');
    value = value.replace(/9/g, '۹');

    return value;
}

/** polyfill */
if (Number.isFinite === undefined) Number.isFinite = function (value) {
    return typeof value === 'number' && isFinite(value);
};

var digitsRE = /(\d{3})(?=\d)/g;

/* eslint no-param-reassign: "off" */
function numberToCurrency(value) {
    var convertToToman = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var currency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var decimal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;

    value = parseFloat(value);
    if (!Number.isFinite(value) || !value && value !== 0) return '';
    currency = currency != null ? currency : '$';
    value = convertToToman == true ? value / 10 : value;
    var _isInteger = isInteger(value);
    var stringified = Math.abs(value).toFixed(decimal);
    var _int = stringified.slice(0, -1 * (decimal + 1));
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = _isInteger ? '' : stringified.slice(-1 * (decimal + 1));
    var sign = value < 0 ? '-' : '';
    return currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
}

export { fadeIn, fadeOut, toggle, slideUp, slideDown, arrayMove, forEach, inArray, isArray, isArrayLike, each, deepEquals, isBoolean, isFloat, isFunction, isInteger, isJson, isMobile, isNumeric, isString, isWindow, isFile, isFileList, isBlob, toType, childrenIs, hasClass, addClass, removeClass, toggleClass, closest, getWidth, getHeight, getElm, addListener, removeListener, addStyle, removeStyle, removeElement, visible, hidden, parents, parent, is, nextSibling, previousSibling, copyToClipboard, debounce, popupCenter, getRandomDarkColor, getRandomColor, pushHash, getHash, replaceHash, ensureHashSlash, tryParseJson, cloneDeep, extend, hasOwnProperty, isEmptyObject, isPlainObject, merge, cleanData, cleanDataInclude, encodeQueryData, decodeQueryData, removeQueryString, camelize, capitalize, hyphenate, isPersianNumeric, isPersianAlphabet, isPersianAlphaNumeric, currencyToNumber, enToFaNumber, faToEnNumber, numberToCurrency };
