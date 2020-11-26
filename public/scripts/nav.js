const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
  
    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(link => {
      link.classList.toggle("fade");
    });
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("toggle");
  });
});

// const body = document.querySelector('body');
// const mode = document.querySelector('.toggleMode');
// mode.addEventListener('click', () => {
//     body.classList.toggle("light_mode");
//     body.classList.toggle("dark_mode");
//     var txt = mode.innerText;
//     if (txt === "Dark Mode") {
//         mode.innerHTML = "Light Mode";
//     } else {
//         mode.innerHTML = "Dark Mode";
//     }
// })

var navbar = document.querySelector('nav')

  window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
      navbar.classList.add('navbar-scrolled')
    } else {
      navbar.classList.remove('navbar-scrolled')
    }
  }
