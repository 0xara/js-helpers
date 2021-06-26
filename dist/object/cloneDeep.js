import '../core/isWindow.js';
import '../core/toType.js';
import './isPlainObject.js';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function cloneDeep(object) {
    if (object === null) return null;

    if (object instanceof Date) return new Date(object);

    if (object instanceof RegExp) return new RegExp(object.source, object.flags);

    if (Array.isArray(object) || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
        var clone = Array.isArray(object) ? [] : {};

        Object.keys(object).forEach(function (key) {
            clone[key] = cloneDeep(object[key]);
        });

        return clone;
    }

    return object;
}

export { cloneDeep };
