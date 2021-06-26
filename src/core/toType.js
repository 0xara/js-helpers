/* eslint-disable no-plusplus */

const class2type = {};


const types = 'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' ');

for(let i = 0; i < types.length; ++i) {
    const name = types[i];
    class2type[`[object ${name}]`] = name.toLowerCase();
}

export function toType(obj) {
    if (obj == null) {
        return `${obj}`;
    }

    // Support: Android <=2.3 only (functionish RegExp)
    return typeof obj === 'object' || typeof obj === 'function' ?
        class2type[Object.prototype.toString.call(obj)] || 'object' :
        typeof obj;
}
