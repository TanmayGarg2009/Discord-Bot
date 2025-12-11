// Scroll animation
const scrollElements = document.querySelectorAll(".animate-on-scroll");

const elementInView = (el, dividend=1)=>{
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight)/dividend;
}

const displayScrollElement = (el)=>{ el.classList.add("scrolled"); }
const hideScrollElement = (el)=>{ el.classList.remove("scrolled"); }

const handleScrollAnimation = ()=>{
    scrollElements.forEach(el=>{
        if(elementInView(el,1.25)) displayScrollElement(el);
        else hideScrollElement(el);
    });
}

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

// Feature Modal
const modal = document.getElementById("featureModal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".feature-card").forEach(card=>{
    card.addEventListener("click", ()=>{
        modal.style.display="block";
        modalTitle.innerText=card.getAttribute("data-title");
        modalContent.innerText=card.getAttribute("data-content");
    });
});

closeBtn.addEventListener("click", ()=>{ modal.style.display="none"; });
window.addEventListener("click",(e)=>{ if(e.target==modal) modal.style.display="none"; });
