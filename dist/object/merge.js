import '../core/isWindow.js';
import '../core/toType.js';
import './isPlainObject.js';
import { cloneDeep } from './cloneDeep.js';

function merge(a, b) {
    Object.keys(b).forEach(function (key) {
        a[key] = cloneDeep(b[key]);
    });
}

export { merge };
