// ==================== Slideshow ==================== //
var slideshow = 1;
showSlides(slideshow);

function plusSlides(n) {
  showSlides(slideshow += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideshow = 1}
  if (n < 1) {slideshow = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow-1].style.display = "block";
  dots[slideshow-1].className += " active";
  captionText.innerHTML = dots[slideshow-1].alt;
}
// ==================== Slideshow ==================== //