
import { isWindow } from './../core/isWindow';
import { toType } from '../core/toType';

export function isArrayLike(obj) {
    // Support: iOS 8.2 (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    const length = !!obj && 'length' in obj && obj.length;
    const type = toType(obj);

    if (type === 'function' || isWindow(obj)) {
        return false;
    }

    return (type === 'array' || length === 0 || typeof length === 'number') && length > 0 && (length - 1) in obj;
}
