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

  const allBurgerLayers = [topBun, middle, bottomBun];
  const allSkillsLists = [frontEndList, toolsList, backEndList];

  function hideAllSkillsLists() {
    allSkillsLists.forEach((list) => {
      list.classList.remove("show");
      list.style.top = "";
    });
  }

  function removeAllActiveStates() {
    allBurgerLayers.forEach((layer) => {
      layer.classList.remove("active", "slide-up", "slide-down");
    });
  }

  function handleBurgerClick(clickedLayer, targetList) {
    removeAllActiveStates();
    hideAllSkillsLists();

    const wasActive = clickedLayer.classList.contains("active");

    if (!wasActive) {
      clickedLayer.classList.add("active");

      if (clickedLayer === topBun) {
        clickedLayer.classList.add("slide-up");
      } else if (clickedLayer === middle) {
        topBun.classList.add("slide-up");
        bottomBun.classList.add("slide-down");
      } else if (clickedLayer === bottomBun) {
        clickedLayer.classList.add("slide-down");
      }

      targetList.classList.add("show");

      const clickedLayerRect = clickedLayer.getBoundingClientRect();
      const skillsContainerRect = document
        .querySelector(".skills-burger-container")
        .getBoundingClientRect();

      targetList.style.top = `${
        clickedLayerRect.top - skillsContainerRect.top
      }px`;
    }
  }

  topBun.addEventListener("click", () =>
    handleBurgerClick(topBun, frontEndList)
  );
  middle.addEventListener("click", () => handleBurgerClick(middle, toolsList));
  bottomBun.addEventListener("click", () =>
    handleBurgerClick(bottomBun, backEndList)
  );

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
