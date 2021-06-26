import { toType } from './toType.js';

function isString(val) {
    return toType(val) === 'string';
}

export { isString };
