function isEmptyObject(obj) {
    /* eslint-disable no-unused-vars */
    // See https://github.com/eslint/eslint/issues/6125
    var name = void 0;

    for (name in obj) {
        return false;
    }
    return true;
}

export { isEmptyObject };
