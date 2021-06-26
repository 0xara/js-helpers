
import { toType } from './../core/toType';
import { isWindow } from './../core/isWindow';

export function isPlainObject(obj) {
    let key;

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