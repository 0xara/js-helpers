
import { isArray } from './../array/isArray';

export function isNumeric(obj) {
    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    // adding 1 corrects loss of precision from parseFloat (#15100)
    const realStringObj = obj && obj.toString();
    return !isArray(obj) && ((realStringObj - parseFloat(realStringObj)) + 1) >= 0;
}