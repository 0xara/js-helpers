
import { isNumeric } from './isNumeric';

export function isFloat(num) {
    return isNumeric(num) && num % 1 !== 0;
}