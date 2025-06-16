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
    const lastImageClassNames = images[images.length-1].className;
    for (let i = 0; i < images.length; i++) {
        images[i].style.setProperty("animation-name", imageAnimationNames[i]);
    }
    imageHolder.removeChild(images[images.length-1]);
    const newImage = document.createElement("div");
    newImage.classList = lastImageClassNames;
    newImage.style.cssText = "height: 000px; flex: 0;"
    imageHolder.prepend(newImage);
    newImage.style.setProperty("animation-name", "defaultExpand");
    console.log(images)
})

const leftArrow = document.querySelector(".left-arrow");
leftArrow.addEventListener("click", () => {
    const imageAnimationNames = ["tertiaryShrink", "secondaryShrink", "primaryShrink", "secondaryExpand", "tertiaryExpand"]
    const images = document.querySelectorAll(".images *")
    const imageHolder = document.querySelector(".images");
    const firstImageClassNames = images[0].className;
    for (let i = 0; i < images.length; i++) {
        images[i].style.setProperty("animation-name", imageAnimationNames[i]);
    }
    imageHolder.removeChild(images[0]);
    const newImage = document.createElement("div");
    newImage.classList = firstImageClassNames;
    newImage.style.cssText = "height: 000px; flex: 0;"
    imageHolder.appendChild(newImage);
    newImage.style.setProperty("animation-name", "defaultExpand");
    console.log(images)
})