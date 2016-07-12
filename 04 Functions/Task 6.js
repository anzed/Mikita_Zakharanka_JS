function getSubstrings () {
    var i = 0,
        result = [];

    while (arguments[i] != undefined) {
        result.push((arguments[i].match(/:\s(.*?)\./)[1]).toString());
        i++;
    }

    return result;
}

getSubstrings("This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.",
    "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black.");
