
import { isNumeric } from './isNumeric';

export function isInteger(num) {
    return isNumeric(num) && Math.floor(num) == +num;
}