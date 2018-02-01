

//initialize slider

$('.slider').slider();

//initialize modal forms

$('#modal1').modal('open');

$('.modal').modal();

//initialize carousel

$('.carousel').carousel();

//initialize parallax

$('.parallax').parallax();

//initialize navigation side bar

$(".button-collapse").sideNav();

var slideIndex = 1;
showSlides(slideIndex);

//next and previous buttons
function plusSlides(n) {
	// body...
	showSlides(slideIndex += n);
}


function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n) {
	// body...
	var i;
	var slides = document.getElementByClassName('mySlides');
	if(n > slides.length){
		slideIndex = 1
	}

	if (n < 1 ){
		slideIndex = slides.length
	}

	for (var i = slides.length - 1; i >= 0; i--) {
		slides[i].style.display = "none";
	}

	slides[slideIndex-1].style.display = "block";

}


