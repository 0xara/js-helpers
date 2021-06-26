

function getOldBrowserInnerWidth() {
    return document.documentElement.clientWidth
        ? document.documentElement.clientWidth : window.screen.width;
}

function getOldBrowserInnerHeight() {
    return document.documentElement.clientHeight
        ? document.documentElement.clientHeight : window.screen.height;
}


export function popupCenter(url, title, w, h, callback = () => {}) {
    // Fixes dual-screen position                         Most browsers      Firefox
    const dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth ? window.innerWidth : getOldBrowserInnerWidth();
    const height = window.innerHeight ? window.innerHeight : getOldBrowserInnerHeight();

    const left = ((width / 2) - (w / 2)) + dualScreenLeft;
    const top = ((height / 2) - (h / 2)) + dualScreenTop;
    const newWindow = window.open(url, title, `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`);

    callback(newWindow);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }

    return newWindow;
}