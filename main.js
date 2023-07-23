let openMenu = document.querySelector(".menu-menu");
let closeMenu = document.querySelector(".menu-cancel");
let menuTablet = document.querySelector(".hide-menu-tablet");

openMenu.addEventListener("click", () => {
  openMenu.classList.toggle("hide");
  closeMenu.classList.toggle("show");
  menuTablet.classList.toggle("hide-menu-tablet");
});
closeMenu.addEventListener("click", () => {
  openMenu.classList.toggle("hide");
  closeMenu.classList.toggle("show");
  menuTablet.classList.toggle("hide-menu-tablet");
});
