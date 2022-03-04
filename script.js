const one = document.getElementById('dot-1');
const two = document.getElementById('dot-2');
const three = document.getElementById('dot-3');

const dots = document.getElementsByClassName("dot");
const slides = document.getElementsByClassName("slide");

one.addEventListener("click", function(){ 
    currentSlide(0);
});
two.addEventListener("click", function(){ 
    currentSlide(1);
 });
 three.addEventListener("click", function(){
    currentSlide(2);
 })

 function currentSlide(n){
    
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active--dot");
    }
    dots[n].className += " active--dot";
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[n].className += " active";
    
    console.log(slides);
 }

 
