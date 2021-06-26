
export function faToEnNumber(val) {
    let enValue = '';

    for (let i = 0; i < val.length; i++) {
        const ch = val.charCodeAt(i);

        if (ch >= 1776 && ch <= 1785) // For Persian digits.
        {
            const newChar = ch - 1728;

            enValue += String.fromCharCode(newChar);
        } else if(ch >= 1632 && ch <= 1641) // For Arabic & Unix digits.
        {
            const newChar = ch - 1584;

            enValue += String.fromCharCode(newChar);
        } else{
            enValue += String.fromCharCode(ch);
        }
    }

    return enValue;
}