console.log(foo()('abc', 'abc'));
console.log(foo()('abc', 'abC'));

function foo () {
    return comp = function (a, b) {
        return (a == b) ? 1 : -1;
    }
}
