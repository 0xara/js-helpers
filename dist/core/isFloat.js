import '../array/isArray.js';
import { isNumeric } from './isNumeric.js';

function isFloat(num) {
    return isNumeric(num) && num % 1 !== 0;
}

export { isFloat };
