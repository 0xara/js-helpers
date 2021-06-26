import { toType } from './toType.js';

function isBoolean(val) {
    return toType(val) === 'boolean';
}

export { isBoolean };
