function getOccurences (word, text, sensitive) {
    var match, index = 0,
        result = [];

    if (sensitive) {
        while ((match = text.indexOf(word, index)) >= 0) {
            result.push(match);
            index = match + word.length;
        }
    } else {
        word = word.toLowerCase();
        text = text.toLowerCase();

        while ((match = text.indexOf(word, index)) >= 0) {
            result.push(match);
            index = match + word.length;
        }
    }

    return result.length;
}

getOccurences('ford', 'The Ford Taunus P1 is a small family car which was produced by Ford Germany from 1952 until 1962', false);
