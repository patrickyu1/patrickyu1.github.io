$(document).ready(function() {
    const distanceToNextImage = document.getElementById("slideshow-container").offsetWidth;
    let currentImageNumber = 0;
    var slide = document.getElementsByClassName("slides");
    $("#next").click(function() {
        currentImageNumber += 1;
        currentImageNumber %= 3;
		$("#strip").css("left", -1* currentImageNumber * distanceToNextImage);
	})

	$("#prev").click(function() {
        currentImageNumber -= 1;
        currentImageNumber = currentImageNumber < 0? 2: currentImageNumber;
		$("#strip").css("left", -1 * currentImageNumber * distanceToNextImage);
	})
    for (var i = 0; i < slide.length; i++) {
        slide[i].style.width = distanceToNextImage + "px";
    }

    $("#dot-1").click(function() {
        $("#strip").css("left", -1 * 0 * distanceToNextImage);
    })

    $("#dot-2").click(function() {
        $("#strip").css("left", -2 * 1 * distanceToNextImage);
    })

    $("#dot-3").click(function() {
        $("#strip").css("left", -3 * 2 * distanceToNextImage);
    })

	
});

window.onresize = function(e) {
    const distanceToNextImage = document.getElementById("slideshow-container").offsetWidth;
    var slide = document.getElementsByClassName("slides");
    for (var i = 0; i < slide.length; i++) {
        slide[i].style.width = distanceToNextImage + "px";
    }
}