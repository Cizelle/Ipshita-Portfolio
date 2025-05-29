document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");
  const navLinks = document.querySelectorAll(".mobile-nav a");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });

  const topBun = document.querySelector(".burger-top-bun");
  const middle = document.querySelector(".burger-middle");
  const bottomBun = document.querySelector(".burger-bottom-bun");

  const frontEndList = document.querySelector(".skills-list.front-end");
  const toolsList = document.querySelector(".skills-list.tools");
  const backEndList = document.querySelector(".skills-list.back-end");

  function hideAllSkillsLists() {
    frontEndList.classList.remove("show");
    toolsList.classList.remove("show");
    backEndList.classList.remove("show");
  }

  topBun.addEventListener("click", () => {
    const isVisible = frontEndList.classList.contains("show");
    hideAllSkillsLists();
    if (!isVisible) frontEndList.classList.add("show");
  });

  middle.addEventListener("click", () => {
    const isVisible = toolsList.classList.contains("show");
    hideAllSkillsLists();
    if (!isVisible) toolsList.classList.add("show");
  });

  bottomBun.addEventListener("click", () => {
    const isVisible = backEndList.classList.contains("show");
    hideAllSkillsLists();
    if (!isVisible) backEndList.classList.add("show");
  });

  const modeSwitch = document.getElementById("modeSwitch");
  const body = document.body;
  const modeLabel = document.getElementById("modeLabel");

  const savedMode = localStorage.getItem("portfolioMode");
  if (savedMode === "pixel") {
    body.classList.add("pixel-mode");
    modeSwitch.checked = true;
    modeLabel.textContent = "Professional Mode";
  } else {
    body.classList.remove("pixel-mode");
    modeSwitch.checked = false;
    modeLabel.textContent = "Pixel Mode";
  }

  modeSwitch.addEventListener("change", () => {
    if (modeSwitch.checked) {
      body.classList.add("pixel-mode");
      modeLabel.textContent = "Professional Mode";
      localStorage.setItem("portfolioMode", "pixel");
    } else {
      body.classList.remove("pixel-mode");
      modeLabel.textContent = "Pixel Mode";
      localStorage.setItem("portfolioMode", "professional");
    }
  });
});
