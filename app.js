var options = { "particles": { "number": { "value": 99, "density": { "enable": true, "value_area": 500.4033491425909 } }, "color": { "value": "#1A286D" }, "shape": { "type": "star", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "sides": 6 }, "image": { "src": "img/github.svg", "width": 70, "height": 100 } }, "opacity": { "value": 1, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 1, "sync": false } }, "size": { "value": 5, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1.5782952832645452, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": false };
particlesJS("particle", options);

$('.back').hide();

//.delay(3000)

$('.front', '.flashcard').hover(function () {
  $(this).hide();
  $(this).siblings('.back').addClass("animated flipInY fast").show();
});

$('.back', '.flashcard').mouseleave(function () {
  $(this).hide();
  $(this).siblings('.front').addClass("animated flipInY fast").show();
});



function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}




/*
$('.front', '.flashcard').on('click', function() {
  $(this).hide();
  $(this).siblings('.back').show();
});



$('.back', '.flashcard').on('click', function() {
  $(this).hide();
  $(this).siblings('.front').show();
});

*/

