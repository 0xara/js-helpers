function isWindow(obj) {
    /* jshint eqeqeq: false */
    return obj != null && obj == obj.window;
}

export { isWindow };
