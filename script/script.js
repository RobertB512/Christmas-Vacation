let hamburger = document.querySelector(".menu-nav-btn");
let navigation = document.querySelector("nav");
hamburger.addEventListener("click", () => {
	navigation.classList.toggle("show-nav");
});
