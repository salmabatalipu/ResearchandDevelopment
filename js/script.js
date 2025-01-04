//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//Ketika Gallery di klik
document.querySelector("#gallery").onclick = () => {
  navbarNav.classList.toggle("active");
};
