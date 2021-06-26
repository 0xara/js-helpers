
import { toType } from './../core/toType';

export function isString(val) {
    return toType(val) === 'string';
}