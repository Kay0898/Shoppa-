//create slides 
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 4000);
      console.log('Showing slides');
}

//Open or close Menu 
//open menu 
function openMenu(){
  document.getElementById("navigations").style.left = "0";
  console.log('Menu opened');
}

//close menu 
function closeMenu(){
  document.getElementById("navigations").style.left = "-100%";
    console.log('Menu closed');
}
