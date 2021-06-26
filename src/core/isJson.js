

export function isJson(val) {
    try {
        JSON.parse(val);
    } catch (e) {
        return false;
    }
    return true;
}