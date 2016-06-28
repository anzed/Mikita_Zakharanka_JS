var a = ['a', 'b', 'c'],
    b = ['A', 'B', 'C'];


function arraysComparer (arr1, arr2) {
    var i = 0;

    if (arr1.length != arr2.length) {
        return 'Массивы не идентичны';
    }

    for (i; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return 'Массивы не идентичны';
        }
        return 'Массивы идентичны';
    }
}

arraysComparer(a, b);
