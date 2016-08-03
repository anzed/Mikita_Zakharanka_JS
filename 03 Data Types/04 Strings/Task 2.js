function bracketsChecker (str) {
    var count = 0, i = 0;
    var arr = str.split('');

    for (i; i < arr.length; i++) {
        if ((arr[i] == ')') && (count == 0)) {
            return 'Скобки расставлены не верно';
        } else if (arr[i] == '(') {
            count++;
        } else if (arr[i] == ')') {
            count--;
        }
    }

    if (count == 0) {
        return 'Скобки расставлены верно';
    }
}

bracketsChecker(`)(a+b))`);
