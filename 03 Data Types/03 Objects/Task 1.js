function Point (x, y) {
    this.x = x;
    this.y = y;
}

function Line (p1, p2) {
    this.p1 = p1;
    this.p2 = p2;

    this.getLength = function () {
        return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
    }
}

function triangleChecking (l1, l2, l3) {
    var l1Length = l1.getLength();
    var l2Length = l2.getLength();
    var l3Length = l3.getLength();

    if (l1Length + l2Length > l3Length && l1Length + l3Length > l2Length &&
        l2Length + l3Length > l1Length) {
        return 'Из заданных линий можно построить треугольник';
    } else {
        return 'Из заданных линий нельзя построить треугольник';
    }
}

var a = new Point(5, 3);
var b = new Point(4, 4);
var c = new Point(5, 6);
var d = new Point(0, 0);
var e = new Point(20, 20);

var l1 = new Line(a, b);
var l2 = new Line(b, c);
var l3 = new Line(d, e);

console.log(triangleChecking(l1, l2, l3));
