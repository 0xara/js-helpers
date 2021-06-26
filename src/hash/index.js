

export function pushHash(path) {
    window.location.hash = path;
}

export function getHash() {
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    const href = window.location.href;
    const index = href.indexOf('#');
    return index === -1 ? '' : href.slice(index + 1);
}

export function replaceHash(path) {
    const href = window.location.href;
    const i = href.indexOf('#');
    const base = i >= 0 ? href.slice(0, i) : href;
    window.location.replace((`${base}#${path}`));
}

export function ensureHashSlash() {
    const path = getHash();
    if (path.charAt(0) === '/') {
        return true;
    }
    replaceHash(`/${path}`);
    return false;
}
