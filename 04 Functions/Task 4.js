var fibo = function fibo (n) {
    var first = 1, second = 1,
        i = 2,
        result = 0;

    while (i < n) {
        result = second + first;
        first = second;
        second = result;
        i++;
    }

    return result;
}

fibo(7);
