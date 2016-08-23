var slides = Array.prototype.slice.call(document.getElementById('slider').children);
var lastSlideIndex = slides.length - 1;

function nextSlide () {
    var currentSlide = document.getElementsByClassName('active-slide')[0];
    var nextSlide = currentSlide.nextElementSibling;

    currentSlide.className = 'slide';
    if (nextSlide == null) nextSlide = slides[0];
    nextSlide.className += ' active-slide';
}

function prevSlide () {
    var currentSlide = document.getElementsByClassName('active-slide')[0];
    var prevSlide = currentSlide.previousElementSibling;

    currentSlide.className = 'slide';
    if (prevSlide == null) prevSlide = slides[lastSlideIndex];
    prevSlide.className += ' active-slide';
}
