
import { isInteger } from './../core/isInteger';

/** polyfill */
if (Number.isFinite === undefined) Number.isFinite = function(value) {
    return typeof value === 'number' && isFinite(value);
};

const digitsRE = /(\d{3})(?=\d)/g;

/* eslint no-param-reassign: "off" */
export function numberToCurrency(value, convertToToman = false, currency = '', decimal = 2) {
    value = parseFloat(value);
    if (!Number.isFinite(value) || (!value && value !== 0)) return '';
    currency = currency != null ? currency : '$';
    value = convertToToman == true ? value / 10 : value;
    const _isInteger = isInteger(value);
    const stringified = Math.abs(value).toFixed(decimal);
    const _int = stringified.slice(0, -1 * (decimal + 1));
    const i = _int.length % 3;
    const head = i > 0
        ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
        : '';
    const _float = _isInteger ? '' : stringified.slice(-1 * (decimal + 1));
    const sign = value < 0 ? '-' : '';
    return currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
}