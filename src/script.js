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