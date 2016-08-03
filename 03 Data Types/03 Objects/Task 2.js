Array.prototype.remove = function (val) {
    var i = 0;

    for (i; i < this.length; i++) {
        if (this[i] === val) {
            this.splice(i, 1);
        }
    }
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];
arr.remove(1);

console.log(arr);
