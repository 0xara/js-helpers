
export function hasOwnProperty(obj, property) {
    return Object.prototype.hasOwnProperty.call(obj, property);
}
