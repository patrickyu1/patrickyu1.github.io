window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

$(function() {
    if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementsByTagName("body")[0].style.overflow = "hidden"
       }
    document.getElementById("home-icon").onclick = homeScroll;
    document.getElementById("about-icon").onclick = aboutScroll;
    document.getElementById("project-icon").onclick = projectsScroll;
    document.getElementById("contact-icon").onclick = contactScroll;
    document.getElementById("clickable").onclick = aboutScroll;
    document.getElementById("soccer").onclick = chika;
    var chikaform = false;
    var isScrolling = false;
    var currentSlide = 0;
    var light = false;
    var wheel = false;

  $(window).on('wheel', function(e) {
      wheel = true;
    if (!isScrolling){
    isScrolling = true;
        // var howFarFromTop = $(document).scrollTop(); //how far from the top have we scrolled?
        // var currentWindowHeight = $( window ).height(); //current window height for responsiveness
        var delta = e.originalEvent.deltaY; // just to know if it is scroll wheel up or down
        //find out what is our offset from the top so we can now how far do we have to scroll to  the next / previous element
        // var currentSlide = Math.floor(howFarFromTop / currentWindowHeight); //approximate which slide is on screen at the moment

        if (delta > 0){
            //scroll down
            // $('body').addClass('stop-scrolling')
            down();
        }
        else {
        //scroll up
            // $('body').addClass('stop-scrolling')
            up();
        } 
    } 
    return false;// return false; // don't let the browser do the default scroll 
});

// window.onscroll = function(){
//     if (!wheel) {
//         var howFarFromTop = $(document).scrollTop();
//         if (howFarFromTop > $( window ).height() * 3) {
//             page(3);
//             currentSlide = 3;
//         } else if (howFarFromTop > $( window ).height() * 2) {
//             page(2);
//             currentSlide = 2;
//         } else if (howFarFromTop > $( window ).height() * 1) {
//             page(1);
//             currentSlide = 1;
//         } else {
//             page(0);
//             currentSlide = 0;
//         }
//     }
// };

$("#about-main, #nav-bar, #skills, #experience").click(function() {
    if (light) {
        $("#skills-text").removeClass("show");
        $("#skills-text").addClass("hidden");
        $("#experience-text").removeClass("show");
        $("#experience-text").addClass("hidden");
        $("#about-main").css("opacity", 1);
        $("#nav-bar").css("opacity", 1);
        $("#experience").css("opacity", 1);
        $("#skills").css("opacity", 1);
        isScrolling = false;
        setTimeout(function(){light = false}, 50);
    }
})

$("#skills").click(function() {
    if (!light) {
        $("#skills-text").removeClass("hidden");
        $("#skills-text").addClass("show");
        $("#about-main").css("opacity", 0.5);
        $("#nav-bar").css("opacity", 0.5);
        $("#experience").css("opacity", 0.5);
        $("#skills").css("opacity", 1);
        isScrolling = true;
        setTimeout(function(){light = true}, 50);
    }
})

$("#experience").click(function() {
    if (!light) {
        $("#experience-text").removeClass("hidden");
        $("#experience-text").addClass("show");
        $("#about-main").css("opacity", 0.5);
        $("#nav-bar").css("opacity", 0.5);
        $("#skills").css("opacity", 0.5);
        isScrolling = true;
        setTimeout(function(){light = true}, 50);
    }
})

document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 38:
        if (!isScrolling){
            isScrolling = true;
            up();
        }
        break;
        case 40: 
        if (!isScrolling){
            isScrolling = true;
            down();
        }
        break;
    }
};

function homeScroll() {
    smoothScroll(0 * $( window ).height());
    reset();
    page(0);
    currentSlide = 0;
}

function aboutScroll() {
    smoothScroll(1 * $( window ).height());
    smush();
    page(1);
    currentSlide = 1;
}

function projectsScroll() {
    smoothScroll(2 * $( window ).height());
    smush();
    page(2);
    currentSlide = 2;
}

function contactScroll() {
    smoothScroll(3 * $( window ).height());
    smush();
    page(3);
    currentSlide = 3;
} 

function down() {
    if (currentSlide < 3) {
                currentSlide++;
                smoothScroll($( window ).height() * currentSlide);
                setTimeout(function(){isScrolling = false}, 800);
                page(currentSlide);
                if (currentSlide == 1) {
                    smush();
                }
            } else {
                isScrolling = false;
            }
            wheel = false;
}

function up() {
    if (currentSlide > 0) {
        currentSlide--;
        smoothScroll($( window ).height() * currentSlide);
        setTimeout(function(){isScrolling = false}, 800);
        page(currentSlide);
        if (currentSlide == 0) {
            reset();
        }
    } else {
        isScrolling = false;
    }
    wheel = false;
}

function chika() {
    if (chikaform) {
        var soccer = document.getElementById("soccer");
        soccer.src = "./assets/images/soccer.png";
        soccer.style.width = "19%";
        soccer.style.left = "63%";
        soccer.style.top = "3%";
        chikaform = false;
    } else {
        var soccer = document.getElementById("soccer");
        soccer.src = "./assets/images/chika dance.gif";
        soccer.style.width = "50%";
        soccer.style.left = "25%";
        soccer.style.top = "0%";
        chikaform = true;
    }
}

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
    if (screen.width / screen.height >= 1.6) {
        document.getElementById("name").style.top = "10.2%";
        document.getElementById("squiggle").style.top = "81.3%";
    } else {
        document.getElementById("name").style.top = "12.2%";
        document.getElementById("squiggle").style.top = "73.3%";
    }
    if (screen.width / screen.height >= 2) {
        document.getElementById("nav-bar").style.bottom = "65%";
    } else {
        document.getElementById("nav-bar").style.bottom = "73%";
    }
    document.getElementById("home-icon").style.top = "54.2%";
    document.getElementById("about-icon").style.top = "54.2%";
    document.getElementById("project-icon").style.top = "48.2%";
    document.getElementById("contact-icon").style.top = "49.5%";
    
}

function smush() {
    if (screen.width / screen.height >= 1.6) {
        document.getElementById("name").style.top = "20.2%";
        document.getElementById("squiggle").style.top = "77.3%";
    } else {
        document.getElementById("name").style.top = "26.2%";
        document.getElementById("squiggle").style.top = "71.3%";
    }
    if (screen.width / screen.height >= 2) {
        document.getElementById("nav-bar").style.bottom = "76%";
    } else {
        document.getElementById("nav-bar").style.bottom = "81%";
    }
    document.getElementById("home-icon").style.top = "37.5%";
    document.getElementById("about-icon").style.top = "37.5%";
    document.getElementById("project-icon").style.top = "33.2%";
    document.getElementById("contact-icon").style.top = "33.8%";
}


// function preventDefault(e) {
//     e = e || window.event;
//     if (e.preventDefault)
//         e.preventDefault();
//     e.returnValue = false;  
//   }

//   function wheel(e) {
//     preventDefault(e);
//   }
  
//   function disable_scroll() {
//     if (window.addEventListener) {
//         window.addEventListener('DOMMouseScroll', wheel, false);
//     }
//     window.onmousewheel = document.onmousewheel = wheel;
//   }

//   function enable_scroll() {
//     if (window.removeEventListener) {
//         window.removeEventListener('DOMMouseScroll', wheel, false);
//     }
//     window.onmousewheel = document.onmousewheel = null;  
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