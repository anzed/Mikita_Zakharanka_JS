function factorialCounter (n) {
    var result = 1;
    do {
        result *= n;
        n--;
    } while (n > 1);
    return result;
}

console.log("Количество возможных вариантов: " + factorialCounter(4));
