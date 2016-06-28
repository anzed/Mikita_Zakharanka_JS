var arr = [];

function getArray (n, min, max) {
    var i = 0;

    for (i; i < n; i++) {
        arr[i] = getRandomNumber();
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return arr;
}

function getIncreasingElements (a) {
    var bestStart = 0, maxLength = 0, start = 0;
    var result;

    while (start < a.length) {
        var count = 1, i = start + 1;

        while (i < a.length && a[i] > a[i-1]) {
            count++;
            i++;
        }

        if (maxLength < count) {
            maxLength = count;
            bestStart = start;
        }

        start += count;
    }

    return result = a.slice(bestStart, bestStart + maxLength);
}

console.log(getArray(15, 0, 10));
console.log(getIncreasingElements(arr));
