import '../core/isWindow.js';
import '../core/toType.js';
import './isArrayLike.js';
import { each } from '../core/each.js';

function forEach(arr, callback) {
    return each(arr, callback);
}

export { forEach };
