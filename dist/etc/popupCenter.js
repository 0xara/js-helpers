function getOldBrowserInnerWidth() {
    return document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
}

function getOldBrowserInnerHeight() {
    return document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;
}

function popupCenter(url, title, w, h) {
    var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};

    // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

    var width = window.innerWidth ? window.innerWidth : getOldBrowserInnerWidth();
    var height = window.innerHeight ? window.innerHeight : getOldBrowserInnerHeight();

    var left = width / 2 - w / 2 + dualScreenLeft;
    var top = height / 2 - h / 2 + dualScreenTop;
    var newWindow = window.open(url, title, "scrollbars=yes, width=" + w + ", height=" + h + ", top=" + top + ", left=" + left);

    callback(newWindow);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }

    return newWindow;
}

export { popupCenter };
