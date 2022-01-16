const showcase = document.querySelector(".showcase");
const nav = document.querySelector("nav");
const nav_ul = document.querySelector("nav ul");

const setShowcaseHeight = () => {
    if (showcase)
        showcase.style.height = `${window.innerHeight - nav.offsetHeight}px`;
};
setShowcaseHeight();

const setNavUlTop = () => {
    if (window.innerWidth <= 500) {
        nav_ul.style.top = nav.offsetHeight + "px";
    }
};
setNavUlTop();
