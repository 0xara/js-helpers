function pushHash(path) {
    window.location.hash = path;
}

function getHash() {
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    var href = window.location.href;
    var index = href.indexOf('#');
    return index === -1 ? '' : href.slice(index + 1);
}

function replaceHash(path) {
    var href = window.location.href;
    var i = href.indexOf('#');
    var base = i >= 0 ? href.slice(0, i) : href;
    window.location.replace(base + '#' + path);
}

function ensureHashSlash() {
    var path = getHash();
    if (path.charAt(0) === '/') {
        return true;
    }
    replaceHash('/' + path);
    return false;
}

export { pushHash, getHash, replaceHash, ensureHashSlash };
