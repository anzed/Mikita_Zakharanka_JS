var arr = [];

function getArray (n, min, max) {
    for (var i = 0; i < n; i++) {
        arr[i] = [];
        for (var j = 0; j < n; j++) {
            arr[i][j] = getRandomNumber();
        }
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return arr;
}

function getChangedArray(a) {
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
            if (i == j) {
                arr[i][j] <= 0 ? (arr[i][j] = 0) : (arr[i][j] = 1);
            }
        }
    }
    return arr;
}

console.log("Заданный массив:");
getArray(5, -10, 10);
console.log("Измененный массив:");
getChangedArray(arr);
