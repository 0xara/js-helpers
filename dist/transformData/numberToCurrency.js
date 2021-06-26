import '../array/isArray.js';
import '../core/isNumeric.js';
import { isInteger } from '../core/isInteger.js';

/** polyfill */
if (Number.isFinite === undefined) Number.isFinite = function (value) {
    return typeof value === 'number' && isFinite(value);
};

var digitsRE = /(\d{3})(?=\d)/g;

/* eslint no-param-reassign: "off" */
function numberToCurrency(value) {
    var convertToToman = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var currency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var decimal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;

    value = parseFloat(value);
    if (!Number.isFinite(value) || !value && value !== 0) return '';
    currency = currency != null ? currency : '$';
    value = convertToToman == true ? value / 10 : value;
    var _isInteger = isInteger(value);
    var stringified = Math.abs(value).toFixed(decimal);
    var _int = stringified.slice(0, -1 * (decimal + 1));
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = _isInteger ? '' : stringified.slice(-1 * (decimal + 1));
    var sign = value < 0 ? '-' : '';
    return currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
}

export { numberToCurrency };
