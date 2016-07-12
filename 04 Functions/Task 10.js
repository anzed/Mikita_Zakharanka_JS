function copyright () {
    var cpr = "\u00A9";

    return function (param) {
        if (typeof param == 'string') {
            return cpr.concat(' ', param);
        }
    }
}

copyright()("EPAM");
