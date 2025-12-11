// Scroll-triggered animation
const scrollElements = document.querySelectorAll(".animate-on-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};

const displayScrollElement = (el) => { el.classList.add("scrolled"); };
const hideScrollElement = (el) => { el.classList.remove("scrolled"); };

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) { displayScrollElement(el); }
        else { hideScrollElement(el); }
    });
};

window.addEventListener("scroll", () => { handleScrollAnimation(); });

// Run animation on page load for visible elements
window.addEventListener("load", handleScrollAnimation);
