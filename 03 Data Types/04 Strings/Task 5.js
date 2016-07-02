function whiteSpaceChanger (text) {
    var reg = / /g;
    return text.replace(reg, '&nbsp;');
}

whiteSpaceChanger('Few   spaces here');
