function deepCopy (obj) {
    var copy, i = 0;

    if (typeof obj !== 'object' || !obj) {
        return obj;
    }

    if (obj instanceof Array) {
        copy = [];

        for (i; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i]);
        }

        return copy;
    }

    if (typeof obj === 'object') {
        copy = {};

        for (i in obj) {
            copy[i] = deepCopy(obj[i]);
        }

        return copy;
    }

}

var arrEx = [3, 4, 2, 234, 4];
var objEx = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 32
}

console.log('Заданный массив ' + arrEx);
console.log('Скопированный массив ' + deepCopy(arrEx));
console.log('Заданный объект');
console.log(objEx);
console.log('Скопированный объект');
console.log(deepCopy(objEx));
