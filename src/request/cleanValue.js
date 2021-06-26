
import { isPlainObject } from './../object/isPlainObject';
import { isArray } from './../array/isArray';
import { each } from './../core/each';
import { isString } from './../core/isString';
import { isNumeric } from './../core/isNumeric';
import { isBoolean } from './../core/isBoolean';
import { toType } from './../core/toType';


function cleanArray(value, acceptEmptyString) {
    const final = isArray(value) ? [] : {};

    each(value, (key, val) => {
        const cleaned = cleanData(val, acceptEmptyString);

        if(toType(cleaned) === 'undefined') return true;

        final[key] = cleaned;
    });

    return final;
}

function cleanValue(value, acceptEmptyString) {
    const final = isString(value) ? value.trim() : value;

    if(final == '' && acceptEmptyString) return final;

    return !final ? undefined : final;
}


export function cleanData(value, acceptEmptyString = false) {
    if(isNumeric(value)) return +value;

    if(isBoolean(value)) return value;

    if(toType(value) == 'function' && !isPlainObject(value)) return value;

    return isArray(value) || isPlainObject(value) ?
        cleanArray(value, acceptEmptyString) : cleanValue(value, acceptEmptyString);
}

export function cleanDataInclude(value) {
	cleanData(value, true);
}

