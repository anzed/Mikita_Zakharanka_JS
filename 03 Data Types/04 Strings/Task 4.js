function toMixCase (str) {
    var i = 0, newStr = '';

    for (i; i < str.length; i++) {
        newStr += Math.round(Math.random()) ? str[i].toLowerCase() : str[i].toUpperCase();
    }

    return newStr;
}

function styleChanger (text) {
    return text.replace(/<upcase>(.*?)<\/upcase>/g, function(match, p1) { return p1.toUpperCase() })
        .replace(/<lowcase>(.*?)<\/lowcase>/g, function(match, p1) { return p1.toLowerCase() })
        .replace(/<mixcase>(.*?)<\/mixcase>/g, function(match, p1) { return toMixCase(p1) });
}

styleChanger("We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>." +
            " We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.");
