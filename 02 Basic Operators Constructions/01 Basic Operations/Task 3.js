function getVolume (r, h) {
    return (Math.PI * r * 2 * h);
}

function getSquare (r, h) {
    return (2 * Math.PI * r * (r + h));
}

console.log("Объем цилиндра - " + getVolume(2, 7));
console.log("Площадь цилиндра - " + getSquare(2, 7));
