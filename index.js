let closeBtn = document.querySelector(".close-btn");
let menuIcon = document.querySelector(".menu-icon");
let menuList = document.querySelectorAll("ul li a");
let navbar = document.querySelector("nav");
let menu = document.querySelector("ul");

menuIcon.onclick = function () {
  menu.classList.toggle("active");
};

closeBtn.onclick = function () {
  menu.classList.remove("active");
};

menuList.forEach((item) => {
  item.onclick = function () {
    menuList.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
    menu.classList.remove("active");
  };
});

