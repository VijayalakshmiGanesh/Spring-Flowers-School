var prevButton = document.querySelector(".prev")
var nextButton = document.querySelector(".next")
var slides = document.querySelectorAll(".study-subjects");
var slideIndex = 1;

// showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

prevButton.addEventListener("click", plusSlides(-1))
nextButton.addEventListener("click", plusSlides(1))