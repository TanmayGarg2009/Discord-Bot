function openSidebar() {
  document.getElementById("sidebar").style.left = "0px";
}
function closeSidebar() {
  document.getElementById("sidebar").style.left = "-300px";
}

function openContactPopup() {
  document.getElementById("contactPopup").style.display = "flex";
}
function closeContactPopup() {
  document.getElementById("contactPopup").style.display = "none";
}

function openFeature(type) {
  let title = "";
  let desc = "";

  if (type === "mod") {
    title = "Moderation System";
    desc = "Kick, ban, timeout, auto-mod, anti-spam, logs & more.";
  } else if (type === "ticket") {
    title = "Ticket System";
    desc = "Users can create support tickets, auto-close, logs & transcripts.";
  } else if (type === "level") {
    title = "Leveling & Economy";
    desc = "XP system, coins, leaderboards, rewards & custom economy.";
  } else if (type === "custom") {
    title = "Custom Commands";
    desc = "Any command you want. Utility, fun, info, automation & more.";
  } else if (type === "database") {
    title = "Database Storage";
    desc = "All data saved safely using JSON or database depending on tier.";
  }

  document.getElementById("featureTitle").innerText = title;
  document.getElementById("featureDesc").innerText = desc;
  document.getElementById("featurePopup").style.display = "flex";
}

function closeFeature() {
  document.getElementById("featurePopup").style.display = "none";
}
