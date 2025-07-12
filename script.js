document.addEventListener("DOMContentLoaded", () => {
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

  if (topBun && middle && bottomBun) {
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
        const skillsContainer = document.querySelector(
          ".skills-burger-container"
        );

        if (skillsContainer) {
          const skillsContainerRect = skillsContainer.getBoundingClientRect();
          targetList.style.top = `${
            clickedLayerRect.top - skillsContainerRect.top
          }px`;
        }
      }
    }

    topBun.addEventListener("click", () =>
      handleBurgerClick(topBun, frontEndList)
    );
    middle.addEventListener("click", () =>
      handleBurgerClick(middle, toolsList)
    );
    bottomBun.addEventListener("click", () =>
      handleBurgerClick(bottomBun, backEndList)
    );
  }

  const modeSwitch = document.getElementById("modeSwitch");
  const body = document.body;
  const modeLabel = document.getElementById("modeLabel");

  if (modeSwitch && body && modeLabel) {
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
  }

  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const detailsUrl = card.dataset.detailsUrl;
      if (detailsUrl) {
        window.location.href = detailsUrl;
      }
    });
  });
});

const navLinks = document.querySelectorAll(".bottom-navbar a");
const sections = document.querySelectorAll("section[id]");

if (navLinks.length > 0 && sections.length > 0) {
  function setActiveLink() {
    let currentActiveSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentActiveSectionId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    if (currentActiveSectionId) {
      const correspondingLink = document.querySelector(
        `.bottom-navbar a[href*="#${currentActiveSectionId}"]`
      );
      if (correspondingLink) {
        correspondingLink.classList.add("active");
      }
    } else {
      const homeLink = document.querySelector(
        '.bottom-navbar a[href*="#hero"]'
      );
      if (homeLink) {
        homeLink.classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", setActiveLink);
  document.addEventListener("DOMContentLoaded", setActiveLink);

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.hash && link.pathname === location.pathname) {
        event.preventDefault();
        document.querySelector(link.hash).scrollIntoView({
          behavior: "smooth",
        });
      }
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}
