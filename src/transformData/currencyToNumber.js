
import { faToEnNumber } from './faToEnNumber';
import { isInteger } from './../core/isInteger';

/** polyfill */
if (Number.isFinite === undefined) Number.isFinite = function(value) {
    return typeof value === 'number' && isFinite(value);
};

export function currencyToNumber(val, decimal = 2) {
    const enValue = faToEnNumber(val);

    const number = +enValue.replace(/[^\d.]/g, '');

    if(Number.isNaN(number)) return 0;

    const value = parseFloat(number);

    if (!Number.isFinite(value) || (!value && value !== 0)) return '';

    return isInteger(value) ? value : value.toFixed(decimal);
}