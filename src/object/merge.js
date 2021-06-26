
import { cloneDeep } from './cloneDeep';

export function merge(a, b) {
    Object.keys(b).forEach((key) => {
        a[key] = cloneDeep(b[key]);
    });
}
