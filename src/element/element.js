
export function getElm(el) {
	return (typeof el === 'string') ? document.querySelector(el) : el;
}