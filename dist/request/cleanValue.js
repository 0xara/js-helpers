import '../core/isWindow.js';
import { toType } from '../core/toType.js';
import '../array/isArrayLike.js';
import { each } from '../core/each.js';
import { isArray } from '../array/isArray.js';
import { isBoolean } from '../core/isBoolean.js';
import { isNumeric } from '../core/isNumeric.js';
import { isString } from '../core/isString.js';
import { isPlainObject } from '../object/isPlainObject.js';

function cleanArray(value, acceptEmptyString) {
    var final = isArray(value) ? [] : {};

    each(value, function (key, val) {
        var cleaned = cleanData(val, acceptEmptyString);

        if (toType(cleaned) === 'undefined') return true;

        final[key] = cleaned;
    });

    return final;
}

function cleanValue(value, acceptEmptyString) {
    var final = isString(value) ? value.trim() : value;

    if (final == '' && acceptEmptyString) return final;

    return !final ? undefined : final;
}

function cleanData(value) {
    var acceptEmptyString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (isNumeric(value)) return +value;

    if (isBoolean(value)) return value;

    if (toType(value) == 'function' && !isPlainObject(value)) return value;

    return isArray(value) || isPlainObject(value) ? cleanArray(value, acceptEmptyString) : cleanValue(value, acceptEmptyString);
}

function cleanDataInclude(value) {
    cleanData(value, true);
}

export { cleanData, cleanDataInclude };
