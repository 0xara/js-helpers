import { getElm } from '../element/element.js';
import '../string/capitalize.js';
import { getHeight } from '../element/dims.js';
import { removeClass, addClass } from '../element/class.js';
import { inArray } from '../array/inArray.js';
import 'raf/polyfill';

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

export { toggle, slideUp, slideDown };
