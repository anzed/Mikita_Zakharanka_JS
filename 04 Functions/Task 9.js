function toConsole (param) {
    console.log(param);
}

function toAlert (param) {
    alert(param);
}

function splitToWords (msg, callback) {
    var i = 0,
        result = msg.split(' ');

    if (callback == undefined) {
        return result;
    } else {
        for (i; i < result.length; i++) {
            callback(result[i]);
        }
    }
}

splitToWords("My very long text msg", toConsole);
splitToWords("My very long text msg", toAlert);
console.log(splitToWords("My very long text msg"));
