function enToFaNumber(val) {
    if (typeof val === 'undefined') {
        return '';
    }

    var value = val;

    value = '' + value;

    value = value.replace(/0/g, '۰');
    value = value.replace(/1/g, '۱');
    value = value.replace(/2/g, '۲');
    value = value.replace(/3/g, '۳');
    value = value.replace(/4/g, '۴');
    value = value.replace(/5/g, '۵');
    value = value.replace(/6/g, '۶');
    value = value.replace(/7/g, '۷');
    value = value.replace(/8/g, '۸');
    value = value.replace(/9/g, '۹');

    return value;
}

export { enToFaNumber };
