import './isWindow.js';
import './toType.js';
import { isArrayLike } from '../array/isArrayLike.js';

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

export { each };
