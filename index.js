//Start Nada's section

// Start responsive menu function

function myFunction() {
  var x = document.getElementById("header_r");
  if (x.className === "header_right") {
    x.className += " responsive";
    y.className.replace(" active", "hidden") ;
  } else {
    x.className = "header_right";
  }
}

// End responsive menu function

//Start Slideshow container 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("my_slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
//End of Slideshow Container

//End Nada's  section

