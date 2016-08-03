function getArray () {
    var result = new Array(20),
        i = 0;

    for (i; i < result.length; i++) {
        result[i] = i * 5;
    }

    return result;
}

console.log(getArray());
