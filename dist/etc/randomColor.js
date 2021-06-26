function getRandomDarkColor() {
    var letters = '012345'.split('');

    var color = letters[Math.round(Math.random() * 5)];

    letters = '0123456789ABCDEF'.split('');

    for (var i = 0; i < 5; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }

    return '#' + color;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');

    var color = '#';

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

export { getRandomDarkColor, getRandomColor };
