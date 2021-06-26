import { isWindow } from '../core/isWindow.js';
import { toType } from '../core/toType.js';

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

export { isArrayLike };
