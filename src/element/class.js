/* eslint-disable no-param-reassign,no-cond-assign */

function getElm(el) {
    return (typeof el === 'string') ? document.querySelector(el) : el;
}

export function hasClass(el, cls) {
	el = getElm(el);
	return new RegExp(`(\\s|^)${cls}(\\s|$)`).test(el.className);
}

export function addClass(el, cls) {
	el = getElm(el);
	/* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }

    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(/\s+/).forEach(c => el.classList.add(c));
        } else {
            el.classList.add(cls);
        }
    } else {
        const cur = ` ${el.getAttribute('class') || ''} `;
        if (cur.indexOf(` ${cls} `) < 0) {
            el.setAttribute('class', (cur + cls).trim());
        }
    }
}

export function removeClass(el, cls) {
	el = getElm(el);
	/* istanbul ignore if */
    if (!cls || !(cls = cls.trim())) {
        return;
    }

    /* istanbul ignore else */
    if (el.classList) {
        if (cls.indexOf(' ') > -1) {
            cls.split(/\s+/).forEach(c => el.classList.remove(c));
        } else {
            el.classList.remove(cls);
        }
        if (!el.classList.length) {
            el.removeAttribute('class');
        }
    } else {
        let cur = ` ${el.getAttribute('class') || ''} `;
        const tar = ` ${cls} `;
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

export function toggleClass(el, cls) {
	el = getElm(el);
	hasClass(el, cls) ? removeClass(el, cls) : addClass(el, cls);
}
