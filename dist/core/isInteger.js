import '../array/isArray.js';
import { isNumeric } from './isNumeric.js';

function isInteger(num) {
    return isNumeric(num) && Math.floor(num) == +num;
}

export { isInteger };
