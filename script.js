function openContactPopup() {
    document.getElementById("popup-bg").style.display = "block";
    document.getElementById("contact-popup").style.display = "block";
}

function openFeature(title, desc, extra) {
    document.getElementById("popup-bg").style.display = "block";
    document.getElementById("feature-popup").style.display = "block";

    document.getElementById("feature-title").innerText = title;
    document.getElementById("feature-desc").innerText = desc;
    document.getElementById("feature-extra").innerText = extra;
}

function closePopups() {
    document.getElementById("popup-bg").style.display = "none";
    document.getElementById("contact-popup").style.display = "none";
    document.getElementById("feature-popup").style.display = "none";
}
