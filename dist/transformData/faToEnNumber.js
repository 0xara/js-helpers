function faToEnNumber(val) {
    var enValue = '';

    for (var i = 0; i < val.length; i++) {
        var ch = val.charCodeAt(i);

        if (ch >= 1776 && ch <= 1785) // For Persian digits.
            {
                var newChar = ch - 1728;

                enValue += String.fromCharCode(newChar);
            } else if (ch >= 1632 && ch <= 1641) // For Arabic & Unix digits.
            {
                var _newChar = ch - 1584;

                enValue += String.fromCharCode(_newChar);
            } else {
            enValue += String.fromCharCode(ch);
        }
    }

    return enValue;
}

export { faToEnNumber };
