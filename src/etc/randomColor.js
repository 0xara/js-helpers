

export function getRandomDarkColor() {
    let letters = '012345'.split('');

    let color = letters[Math.round(Math.random() * 5)];

    letters = '0123456789ABCDEF'.split('');

    for (let i = 0; i < 5; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }

    return `#${color}`;
}


export function getRandomColor() {
    const letters = '0123456789ABCDEF'.split('');

    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
