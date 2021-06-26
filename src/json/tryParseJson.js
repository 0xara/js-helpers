
import { toType } from './../core/toType';

export function tryParseJson(val) {
    if(toType(val) !== 'string') return val;

    try {
        return JSON.parse(val);
    } catch (e) {
        return val;
    }
}
