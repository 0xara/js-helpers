

export function inArray(elem, arr, i = 0) {
    let len;

    if (arr) {
        if (Array.prototype.indexOf) {
            return Array.prototype.indexOf.call(arr, elem, i);
        }

        len = arr.length;
        if(i) { i = i < 0 ? Math.max(0, len + i) : i; }

        for (; i < len; i++) {
            // Skip accessing in sparse arrays
            if (i in arr && arr[i] === elem) {
                return i;
            }
        }
    }

    return -1;
}