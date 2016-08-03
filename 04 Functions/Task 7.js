var find = function (testString, test = testString) {
    var reg = new RegExp (test);
    return testString.search(reg);
}

console.log("testString = 'abc', test ='b' --- " + find('abc', 'b'));
console.log("testString = 'abc' --- " + find('abc'));
console.log("testString = 'abc', test ='d' --- " + find('abc', 'd'));
console.log("testString = 'abc', test='a', test2='b' --- " + find('abc', 'a', 'b'));
