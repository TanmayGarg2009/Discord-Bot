// Scroll animation
const scrollElements = document.querySelectorAll(".animate-on-scroll");
const elementInView = (el, dividend=1)=>el.getBoundingClientRect().top <= (window.innerHeight)/dividend;
const displayScrollElement = el=>el.classList.add("scrolled");
const hideScrollElement = el=>el.classList.remove("scrolled");
const handleScrollAnimation=()=>scrollElements.forEach(el=>elementInView(el,1.25)?displayScrollElement(el):hideScrollElement(el));
window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

// Feature Modal
const featureModal=document.getElementById("featureModal");
const modalTitle=document.getElementById("modalTitle");
const modalContent=document.getElementById("modalContent");
const closeBtn=document.querySelector(".close");
document.querySelectorAll(".feature-card").forEach(card=>{
  card.addEventListener("click", ()=>{
    featureModal.style.display="block";
    modalTitle.innerText=card.getAttribute("data-title");
    modalContent.innerText=card.getAttribute("data-content");
  });
});
closeBtn.addEventListener("click",()=>featureModal.style.display="none");
window.addEventListener("click",e=>{if(e.target==featureModal) featureModal.style.display="none";});

// Contact Modal
const contactModal=document.getElementById("contactModal");
const contactBtn=document.getElementById("contact-btn");
const closeContact=document.querySelector(".close-contact");
contactBtn.addEventListener("click",()=>{contactModal.style.display="block";});
closeContact.addEventListener("click",()=>{contactModal.style.display="none";});
window.addEventListener("click",e=>{if(e.target==contactModal) contactModal.style.display="none";});
