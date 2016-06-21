var arr = [];

function getArray (n, min, max) {
    for (var i = 0; i < n; i++) {
        arr[i] = getRandomNumber();
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return arr;
}

function getMaxElement(a) {
    var maxElement = a[0];
    for (var i = 0; i < a.length; i++) {
        if (maxElement < a[i]) {
            maxElement = a[i];
        }
    }
    return maxElement;
}

function getMinElement(a) {
    var minElement = a[0];
    for (var i = 0; i < a.length; i++) {
        if (minElement > a[i]) {
            minElement = arr[i];
        }
    }
    return minElement;
}

function getSumOfElements(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

function getAverageValue(a, func) {
    var sum = getSumOfElements(a);
    return sum / a.length;
}

function getOddElements(a) {
    var resultArray = [],
        j = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            resultArray[j] = a[i];
            j++;
        }
    }
    return resultArray;
}

console.log("Заданный массив: " + getArray(5, 0, 20));
console.log("Наибольшее значение массива: " + getMaxElement(arr));
console.log("Наименьшее значение массива: " + getMinElement(arr));
console.log("Сумма всех элементов массива: " + getSumOfElements(arr));
console.log("Среднее арифметическое всех элементов массива: " + getAverageValue(arr, getSumOfElements(arr)));
console.log("Нечетные элементы массива: " + getOddElements(arr));
