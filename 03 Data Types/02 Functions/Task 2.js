function reverseNumber (a) {
    var inputNumber = a.toString();
    var numberToArray = inputNumber.split('');
    var reversedArray = numberToArray.reverse();
    var result = reversedArray.join('');

    return parseInt(result);
}

reverseNumber(1234);
