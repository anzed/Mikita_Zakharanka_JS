function getAllSum (a, b) {
    var result = 0;
    for (a += 1; a < b; a++) {
        result += a;
    }
    return result;
}

function getOddSum (a, b) {
    var result = 0;
    for (a += 1; a < b; a++) {
        if (a % 2 != 0) {
            result += a;
            a++;
        } else {
            a++;
        }
    }
    return result;
}

console.log("Сумма всех чисел промежутка: " + getAllSum(2, 7));
console.log("Сумма нечетных чисел промежутка: " + getOddSum(2, 7));
