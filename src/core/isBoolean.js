
import { toType } from './../core/toType';

export function isBoolean(val) {
    return toType(val) === 'boolean';
}