var str = function (input) {
    if (typeof input == 'string' && input != '') {
        alert("String is non empty");
    } else {
        alert("String is empty");
    }
}

str.isNonEmptyStr = function (param) {
    return (typeof param == 'string' && param != '') ? true : false;
}

console.log('str.isNonEmptyStr() --- ' + str.isNonEmptyStr());
console.log('str.isNonEmptyStr("") --- ' + str.isNonEmptyStr(""));
console.log('str.isNonEmptyStr("a") --- ' + str.isNonEmptyStr("a"));
console.log('str.isNonEmptyStr(1) --- ' + str.isNonEmptyStr(1));

str();
str("a");
