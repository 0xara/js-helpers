// https://codepen.io/mican/pen/wrNjVW
import { getElm } from "../element/element";
import { getHeight } from './../element/dims';
import { addClass, removeClass, hasClass } from "../element/class";
import {inArray} from "./../array/inArray";

/** polyfill for requestAnimationFrame **/
import 'raf/polyfill';

function calculate(el, { time, ...options }) {
	let height = getHeight(el);
	if (!time) { time = (height / 3) + 150; }
	const currHeight = el.clientHeight * (getComputedStyle(el).display !== 'none');
	const [start, end] = [...(currHeight > (height/2) ? [height,0] : [0,height])];

	return { ...options, el, time, start, end };
}

export function toggle({ el, type = 'toggle', className = 'open', ...options }) {
	el = getElm(el);

	const calc = calculate(el, options);
	const { end } = calc;

	if(type==='slideUp' && end !== 0) return;
	if(type==='slideDown' && end === 0) return;

	end === 0 ? removeClass(el, className) : addClass(el, className);
	// el.classList[ end === 0 ? 'remove' : 'add' ]('open');
	el.style.setProperty('overflow', 'hidden');
	el.style.setProperty('display', 'block');
	// el.style.cssText = "overflow: hidden; display: block;";

	applyRepeat(calc)
}

export function slideUp(options) {
	toggle({ ...options, type: 'slideUp' });
}

export function slideDown(options) {
	toggle({ ...options, type: 'slideDown' });
}


function applyRepeat({ el, time, start, end, onStep, onStart,onEnd }) {

	const disp = end - start;

	const init = (new Date).getTime();

	var repeat = function() {
		let needle;
		const instance = (new Date).getTime() - init;
		const step = start + ((disp * instance) / time);
		if (instance <= time) {
			el.style.setProperty('height', step + 'px');
			onStep && onStep(step);
			// el.style.height = step + 'px'; // if Math.floor(step) in [start..end]
		} else {
			el.style.setProperty('height',null);
			el.style.setProperty('overflow',null);
			el.style.setProperty('display', end === 0 ? 'none' : 'block');
			//el.style.cssText = `display: ${end === 0 ? 'none' : 'block'}`;
			onEnd && onEnd();
		}

		const repeatLoop = requestAnimationFrame(repeat);
		if ((needle = Math.floor(step), inArray(needle, [...__range__(start, end, true)])===-1)) { return cancelAnimationFrame(repeatLoop); }
	};

	onStart && onStart();

	return repeat();
}



function __range__(left, right, inclusive) {
	let range = [];
	let ascending = left < right;
	let end = !inclusive ? right : ascending ? right + 1 : right - 1;
	for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
		range.push(i);
	}
	return range;
}