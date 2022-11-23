// to the top button

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

// FAQ

let faq = document.getElementsByClassName("faq-question");
let i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none"
    } else {
      body.style.display = "block"
    }
  });
}