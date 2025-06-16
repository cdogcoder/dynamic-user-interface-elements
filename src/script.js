import "./styles.css";

const dropdownMenuButton = document.querySelector(".dropdown-menu-button");
dropdownMenuButton.addEventListener("click", () => {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.classList = "dropdown-menu visible";
})

const closeDropdownMenuButton = document.querySelector(".close-dropdown-menu-button");
closeDropdownMenuButton.addEventListener("click", () => {
    const dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.classList = "dropdown-menu invisible";
})

const rightArrow = document.querySelector(".right-arrow");
rightArrow.addEventListener("click", () => {
    const imageAnimationNames = ["tertiaryExpand", "secondaryExpand", "primaryShrink", "secondaryShrink", "tertiaryShrink"]
    const images = document.querySelectorAll(".images *")
    const imageHolder = document.querySelector(".images");
    for (let i = 0; i < images.length; i++) {
        images[i].style.setProperty("animation-name", imageAnimationNames[i]);
    }
    imageHolder.removeChild(images[images.length-1]);
    const newImage = document.createElement("div");
    newImage.classList = "image blue";
    newImage.style.cssText = "height: 000px; flex: 0;"
    imageHolder.prepend(newImage);
    newImage.style.setProperty("animation-name", "defaultExpand");
    console.log(images)
})