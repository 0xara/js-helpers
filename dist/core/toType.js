var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable no-plusplus */

var class2type = {};

var types = 'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' ');

for (var i = 0; i < types.length; ++i) {
    var name = types[i];
    class2type['[object ' + name + ']'] = name.toLowerCase();
}

function toType(obj) {
    if (obj == null) {
        return '' + obj;
    }

    // Support: Android <=2.3 only (functionish RegExp)
    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function' ? class2type[Object.prototype.toString.call(obj)] || 'object' : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
}

export { toType };
