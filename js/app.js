let flag=0;
function controller(x){
    flag=flag+x;
    slideShow(flag);
}

slideShow(flag);

function slideShow(num){
    let slides=document.getElementsByClassName('slide');

  // condition for reset

    if (num==slides.length) {
        flag=0;
        num=0;
    }if (num<0) {
        flag=slides.length-1;
        num=slides.length-1;
    }
    
    for(let y of slides){
      y.style.display="none";
    }
    
    slides[num].style.display="block";
    
}
/**Timer slideshow**/  
 var slideIndex = 0;
      showSlides();
      function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for(i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if(slideIndex > slides.length) {
          slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
      }