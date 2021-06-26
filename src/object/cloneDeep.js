
import { isPlainObject as isObject } from './isPlainObject';

function cloneD(val) {
    if(!isObject(val)) return val;

    return (JSON.parse(JSON.stringify(val)));
}

export function cloneDeep(object) {
    if (object === null) return null;

    if(object instanceof Date) return new Date(object);

    if(object instanceof RegExp) return new RegExp(object.source, object.flags);

    if (Array.isArray(object) || typeof object === 'object') {
        const clone = Array.isArray(object) ? [] : {};

        Object.keys(object).forEach((key) => {
            clone[key] = cloneDeep(object[key]);
        });

        return clone;
    }

    return object;
}