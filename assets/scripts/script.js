
$(function() {
    document.getElementById("home-icon").onclick = homeScroll;
    document.getElementById("about-icon").onclick = aboutScroll;
    document.getElementById("project-icon").onclick = projectsScroll;
    document.getElementById("contact-icon").onclick = contactScroll;
    // document.getElementById("soccer").onclick = chika;
    // document.getElementById("chika").onclick = soccer;
    var isScrolling = false;
  $(window).on('wheel', function(e) {
    if (!isScrolling){
    isScrolling = true;
        var howFarFromTop = $(document).scrollTop(); //how far from the top have we scrolled?
        var currentWindowHeight = $( window ).height(); //current window height for responsiveness
        var delta = e.originalEvent.deltaY; // just to know if it is scroll wheel up or down
        //find out what is our offset from the top so we can now how far do we have to scroll to  the next / previous element
        var currentSlide = Math.floor(howFarFromTop / currentWindowHeight); //approximate which slide is on screen at the moment

        if (delta > 0){
            //scroll down
            // $('body').addClass('stop-scrolling')
            smoothScroll(currentWindowHeight * (currentSlide + 1));
            setTimeout(function(){isScrolling = false}, 800);
            page(currentSlide + 1);
            if (currentSlide == 0) {
                smush();
            }
        }
        else {
        //scroll up
            // $('body').addClass('stop-scrolling')
            smoothScroll(currentWindowHeight * (currentSlide));
            setTimeout(function(){isScrolling = false}, 800);
            page(currentSlide);
            if (currentSlide == 0 && howFarFromTop > 0) {
                reset();
            }
        } 
        
    } 
    // return false; // don't let the browser do the default scroll 
});
  
  
});

function smoothScroll(offsetPixels){
    if (offsetPixels < 0){ //avoid negative numbers on the scroll up
    offsetPixels = 0;   
  }

  //this function is just to make an animated scrolling transition
  $('html, body').animate({
    scrollTop: offsetPixels
  }, 800);

//    $('body').removeClass('stop-scrolling');
}

function reset() {
    document.getElementById("nav-bar").style.bottom = "73%";
    document.getElementById("name").style.top = "10.2%";
    document.getElementById("squiggle").style.top = "80.3%";
    document.getElementById("home-icon").style.top = "54.2%";
    document.getElementById("about-icon").style.top = "54.2%";
    document.getElementById("project-icon").style.top = "48.2%";
    document.getElementById("contact-icon").style.top = "49.5%";
}

function smush() {
    document.getElementById("nav-bar").style.bottom = "81%";
    document.getElementById("name").style.top = "20.2%";
    document.getElementById("squiggle").style.top = "77.3%";
    document.getElementById("home-icon").style.top = "37.5%";
    document.getElementById("about-icon").style.top = "37.5%";
    document.getElementById("project-icon").style.top = "33.2%";
    document.getElementById("contact-icon").style.top = "33.8%";
}
function homeScroll() {
    smoothScroll(0 * $( window ).height());
    reset();
    page(0);
}

function aboutScroll() {
    smoothScroll(1 * $( window ).height());
    smush();
    page(1);
}

function projectsScroll() {
    smoothScroll(2 * $( window ).height());
    smush();
    page(2);
}

function contactScroll() {
    smoothScroll(3 * $( window ).height());
    smush();
    page(3);
}

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;  
  }

  function wheel(e) {
    preventDefault(e);
  }
  
  function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
  }

  function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = null;  
}

// function chika() {
//     var soccer = document.getElementById("soccer");
//     soccer.src = "./assets/images/chika dance.gif";
//     soccer.style.width = "50%";
//     soccer.style.left = "25%";
//     soccer.style.top = "0%";
//     soccer.id = "chika";
// }

// function ball() {
//     var soccer = document.getElementById("chika");
//     soccer.src = "./assets/images/soccer.png";
//     soccer.style.width = "19%";
//     soccer.style.left = "63%";
//     soccer.style.top = "3%";
// }

function page(next) {
    switch (next) {
        case 0: document.getElementById("icons").style.backgroundColor = "#E5FFFC";
                document.getElementsByTagName("BODY")[0].style.backgroundColor = "#E5FFFC";
                break;
        case 1: document.getElementById("icons").style.backgroundColor = "#FFEECC";
                document.getElementsByTagName("BODY")[0].style.backgroundColor = "#FFEECC";
                break;
        case 2: document.getElementById("icons").style.backgroundColor = "#EAFFE9";
                document.getElementsByTagName("BODY")[0].style.backgroundColor = "#EAFFE9";
                break;
        case 3: document.getElementById("icons").style.backgroundColor = "#F1EBFB";
                document.getElementsByTagName("BODY")[0].style.backgroundColor = "#F1EBFB";
                break;
    }
}

// Catch scroll event
$( window ).scroll(function() {
    if ($(this).scrollTop()<62) { 
        $("#nav-bar" ).css( "z-index", -1);
        $("#nav-bar" ).css( "background-color", "transparent");   
    } else { 
        $("#nav-bar" ).css( "z-index", 9999);
        $("#nav-bar" ).css( "background-color", "transparent");
    }
  });

