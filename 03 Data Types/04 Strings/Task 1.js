function reverseString (str) {
    var stringToArray = str.split('');
    var reversedArray = stringToArray.reverse();
    var result = reversedArray.join('');

    return result;
}

reverseString('sample');
