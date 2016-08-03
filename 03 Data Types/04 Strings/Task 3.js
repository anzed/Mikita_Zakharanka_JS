function getMatches(word, text) {
    var reg = new RegExp (word, "ig");
    var result = text.match(reg);

    return 'Найдено ' + result.length + ' совпадений';
}

getMatches("in", "We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don't have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.")
