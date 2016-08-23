window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
    window.oRequestAnimationFrame;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var head = document.createElement('img');
head.src = 'img/Picture1.png';
var headWidth = 100;
var headHeight = 150;

var bike = document.createElement('img');
bike.src = 'img/Picture2.png';
var bikeWidth = 150;
var bikeHeight = 100;

var house = document.createElement('img');
house.src = 'img/Picture3.png';
var houseWidth = 200;
var houseHeight = 240;

var speed = 0.04;

function animate(now, before, position) {
    var timeInterval = now - before;
    var distance = speed * timeInterval;

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(head, houseWidth + position, 15, headWidth, headHeight);
    context.drawImage(bike, houseWidth + position, 145, bikeWidth, bikeHeight);
    context.drawImage(house, 0, 0, houseWidth, houseHeight);

    requestAnimationFrame(function(timestamp){
        animate(timestamp, now, position + distance);
    });
}

animate(0, 0, 0);

