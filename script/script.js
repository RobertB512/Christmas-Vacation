let hamburger = document.querySelector("nav");
hamburger.style.right = "-100vw";

function hamburgerMenu() {
  // console.log(`right-hidden: ${hamburger.style.right === "-100vw"}`)
  // console.log(`in view: ${hamburger.style.right === "0"}`)

  if (hamburger.style.right === "-100vw") {
    hamburger.style.right = "0";
    // console.log("should be visible")
  } else if (hamburger.style.right = "0") {
    hamburger.style.right = "-100vw";
    // console.log("should be hidden")
  }
}




