// auto type

let typed = new Typed(".auto-input", {
  strings: ["Jevgenijs Majevksis", "Web Developer", "UI Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});

// go to top button 

let topButton = document.getElementById("top-btn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}