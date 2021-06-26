import '../array/isArray.js';
import '../core/isNumeric.js';
import { isInteger } from '../core/isInteger.js';
import { faToEnNumber } from './faToEnNumber.js';

/** polyfill */
if (Number.isFinite === undefined) Number.isFinite = function (value) {
    return typeof value === 'number' && isFinite(value);
};

function currencyToNumber(val) {
    var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var enValue = faToEnNumber(val);

    var number = +enValue.replace(/[^\d.]/g, '');

    if (Number.isNaN(number)) return 0;

    var value = parseFloat(number);

    if (!Number.isFinite(value) || !value && value !== 0) return '';

    return isInteger(value) ? value : value.toFixed(decimal);
}

export { currencyToNumber };
