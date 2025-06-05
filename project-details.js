const projectsData = [
  {
    id: "notesplay",
    title: "NotesPlay",
    shortDescription: "Secure Note-Taking App",
    meta: "Android App Development",
    type: "app",
    description: `NotesPlay is a feature-rich Android application designed for secure and efficient note-taking. It allows users to create, read, update, and delete notes, with a focus on local storage for enhanced privacy. The intuitive UI/UX, built with Jetpack Compose, provides a seamless user experience, ensuring that your thoughts and ideas are always at your fingertips, safely stored on your device.`,
    techStack: "Android, Kotlin, SQLite (Local Storage), Jetpack Compose",
    thumbnailLogo: "images/app logo.png",
    heroImage: "images/app logo.png",
    processImages: [
      "images/np (1).jpeg",
      "images/np (2).jpeg",
      "images/np (3).jpeg",
      "images/np (4).jpeg",
      "images/np (5).jpeg",
      "images/np (6).jpeg",
      "images/np (7).jpeg",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Cizelle/NotesPlayy",
    problemSolutionImpact: {
      problem:
        "Users need a reliable and private way to store notes locally without cloud reliance, ensuring data security.",
      solution:
        "Developed an Android app with SQLite for local storage, prioritizing user privacy through secure data handling and offline accessibility.",
      impact:
        "Enabled users to securely manage notes offline, significantly boosting their personal data control and providing a trustworthy alternative to cloud-based solutions.",
    },
  },
  {
    id: "donora",
    title: "Donora",
    shortDescription: "Blockchain-based Donation Platform",
    meta: "Web3, Decentralized Applications",
    type: "web",
    description: `Donora is a decentralized donation platform built on blockchain technology. It ensures transparency and traceability of donations from donor to beneficiary. Leveraging Flask for the backend and Web3.py for blockchain interaction, it provides a secure and immutable record of every transaction, fostering trust and accountability in the philanthropic process and redefining how charitable giving is managed.`,
    techStack:
      "Python, Flask, Web3.py, HTML/CSS, JavaScript, Blockchain (Ethereum)",
    thumbnailLogo: "images/donora.png",
    heroImage: "images/donora.png",
    processImages: [
      "images/donor (1).png",
      "images/donor (2).png",
      "images/donor (3).png",
      "images/donor (4).png",
      "images/donor (5).png",
      "images/donor (6).png",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Cizelle/Donora",
    problemSolutionImpact: {
      problem:
        "Lack of transparency in traditional donation systems often leads to donor distrust and inefficient fund allocation.",
      solution:
        "Implemented a blockchain platform for immutable, traceable donations, ensuring every transaction is publicly verifiable and secure.",
      impact:
        "Increased donor confidence and accountability in charitable giving, promoting more effective and trustworthy philanthropic endeavors globally.",
    },
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const modeSwitch = document.getElementById("modeSwitch");
  const modeLabel = document.getElementById("modeLabel");

  const setMode = (mode) => {
    document.body.classList.remove("pixel-mode", "professional-mode");
    if (mode === "pixel-mode") {
      document.body.classList.add("pixel-mode");
      modeLabel.textContent = "Professional Mode";
    } else {
      document.body.classList.add("professional-mode");
      modeLabel.textContent = "Pixel Mode";
    }
    localStorage.setItem("mode", mode);
  };

  const storedMode = localStorage.getItem("mode");
  if (storedMode) {
    setMode(storedMode);
    modeSwitch.checked = storedMode === "pixel-mode";
  } else {
    setMode("professional-mode");
    modeSwitch.checked = false;
  }

  modeSwitch.addEventListener("change", () => {
    if (modeSwitch.checked) {
      setMode("pixel-mode");
    } else {
      setMode("professional-mode");
    }
  });

  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      document.body.classList.toggle("mobile-nav-open");
    });
  }

  const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("mobile-nav-open");
    });
  });

  if (document.body.id === "project-details-page") {
    const projectThumbnailsContainer = document.getElementById(
      "project-thumbnails-container"
    );
    const detailProjectTitle = document.getElementById("detail-project-title");
    const detailProjectMeta = document.getElementById("detail-project-meta");
    const detailProjectHero = document.getElementById("detail-project-hero");
    const detailProjectDescription = document.getElementById(
      "detail-project-description"
    );
    const detailProjectTechStack = document.getElementById(
      "detail-project-tech-stack"
    );
    const detailProjectLinks = document.getElementById("detail-project-links");
    const detailProjectProblemSolutionImpact = document.getElementById(
      "detail-project-problem-solution-impact"
    );
    const workingProcessContainer = document.getElementById("working-process");

    const backButton = document.querySelector(".back-to-projects-button");

    if (backButton) {
      backButton.addEventListener("click", () => {
        window.location.href = "index.html#projects";
      });
    }

    const displayProjectDetails = (project) => {
      detailProjectTitle.textContent = project.title;
      detailProjectMeta.textContent = project.meta;
      detailProjectDescription.textContent = project.description;
      detailProjectTechStack.textContent = `Technologies: ${project.techStack}`;

      detailProjectHero.innerHTML = "";
      const heroImg = document.createElement("img");
      heroImg.src = project.heroImage;
      heroImg.alt = project.title + " Hero Image";
      detailProjectHero.appendChild(heroImg);

      detailProjectLinks.innerHTML = "";
      if (project.liveUrl && project.liveUrl !== "#") {
        const liveLink = document.createElement("a");
        liveLink.href = project.liveUrl;
        liveLink.target = "_blank";
        liveLink.classList.add("button", "primary-button");
        liveLink.textContent = "View Live";
        detailProjectLinks.appendChild(liveLink);
      }
      if (project.githubUrl && project.githubUrl !== "#") {
        const githubLink = document.createElement("a");
        githubLink.href = project.githubUrl;
        githubLink.target = "_blank";
        githubLink.classList.add("button", "secondary-button");
        githubLink.textContent = "GitHub Repo";
        detailProjectLinks.appendChild(githubLink);
      }

      detailProjectProblemSolutionImpact.innerHTML = `
                <h3>Problem, Solution & Impact</h3>
                <p><strong>Problem:</strong> ${project.problemSolutionImpact.problem}</p>
                <p><strong>Solution:</strong> ${project.problemSolutionImpact.solution}</p>
                <p><strong>Impact:</strong> ${project.problemSolutionImpact.impact}</p>
            `;

      workingProcessContainer.innerHTML = "";

      const heading = document.createElement("h3");
      heading.className = "subsection-heading";
      heading.textContent = "Working Process / Screenshots";
      workingProcessContainer.appendChild(heading);

      let imageContainer;
      if (project.type === "app") {
        imageContainer = document.createElement("div");
        imageContainer.className = "app-image-scroller";
      } else {
        imageContainer = document.createElement("div");
        imageContainer.className = "web-image-grid";
      }

      if (project.processImages && project.processImages.length > 0) {
        project.processImages.forEach((imageSrc) => {
          const imgElement = document.createElement("img");
          imgElement.src = imageSrc;
          imgElement.alt = `Screenshot for ${project.title}`;

          if (project.type === "app") {
            const scrollItem = document.createElement("div");
            scrollItem.className = "scroll-item";
            scrollItem.appendChild(imgElement);
            imageContainer.appendChild(scrollItem);
          } else {
            imageContainer.appendChild(imgElement);
          }
        });
      } else {
        const noImagesMessage = document.createElement("p");
        noImagesMessage.textContent =
          "No process images available for this project.";
        imageContainer.appendChild(noImagesMessage);
      }

      workingProcessContainer.appendChild(imageContainer);

      const currentMode = localStorage.getItem("mode");
      if (currentMode === "pixel-mode") {
        document.body.classList.add("pixel-mode");
      } else {
        document.body.classList.remove("pixel-mode");
      }
    };

    const setActiveThumbnail = (projectId) => {
      document.querySelectorAll(".project-thumbnail-card").forEach((card) => {
        card.classList.remove("active");
      });
      const activeCard = document.querySelector(
        `.project-thumbnail-card[data-project-id="${projectId}"]`
      );
      if (activeCard) {
        activeCard.classList.add("active");
      }
    };

    projectsData.forEach((project) => {
      const thumbnailCard = document.createElement("div");
      thumbnailCard.classList.add("project-thumbnail-card");
      thumbnailCard.dataset.projectId = project.id;
      thumbnailCard.innerHTML = `
                <img src="${project.thumbnailLogo}" alt="${project.title} Logo" class="thumbnail-logo">
                <span class="thumbnail-title">${project.title}</span>
            `;
      thumbnailCard.addEventListener("click", () => {
        displayProjectDetails(project);
        setActiveThumbnail(project.id);
        history.pushState(
          { id: project.id },
          project.title,
          `project-details.html?id=${project.id}`
        );
      });
      projectThumbnailsContainer.appendChild(thumbnailCard);
    });

    const urlParams = new URLSearchParams(window.location.search);
    const initialProjectId = urlParams.get("id");

    if (initialProjectId) {
      const initialProject = projectsData.find(
        (p) => p.id === initialProjectId
      );
      if (initialProject) {
        displayProjectDetails(initialProject);
        setActiveThumbnail(initialProject.id);
      } else {
        detailProjectTitle.textContent = "Project Not Found";
        detailProjectDescription.textContent =
          "The requested project could not be found. Please select from the list.";
        detailProjectMeta.innerHTML =
          detailProjectHero.innerHTML =
          detailProjectTechStack.innerHTML =
          detailProjectLinks.innerHTML =
          detailProjectProblemSolutionImpact.innerHTML =
          workingProcessContainer.innerHTML =
            "";
      }
    } else if (projectsData.length > 0) {
      displayProjectDetails(projectsData[0]);
      setActiveThumbnail(projectsData[0].id);
      history.replaceState(
        { id: projectsData[0].id },
        projectsData[0].title,
        `project-details.html?id=${projectsData[0].id}`
      );
    } else {
      detailProjectTitle.textContent = "No Projects Available";
      detailProjectDescription.textContent =
        "There are no projects to display.";
    }

    window.addEventListener("popstate", (event) => {
      const state = event.state;
      if (state && state.id) {
        const project = projectsData.find((p) => p.id === state.id);
        if (project) {
          displayProjectDetails(project);
          setActiveThumbnail(project.id);
        }
      } else {
        if (projectsData.length > 0) {
          displayProjectDetails(projectsData[0]);
          setActiveThumbnail(projectsData[0].id);
        } else {
          detailProjectTitle.textContent = "No Projects Available";
          detailProjectDescription.textContent =
            "There are no projects to display.";
        }
      }
    });
  }

  const body = document.body;
  const savedMode = localStorage.getItem("portfolioMode");

  if (savedMode === "pixel") {
    body.classList.add("pixel-mode");
    if (modeSwitch && modeLabel) {
      modeSwitch.checked = true;
      modeLabel.textContent = "Professional Mode";
    }
  } else {
    body.classList.remove("pixel-mode");
    if (modeSwitch && modeLabel) {
      modeSwitch.checked = false;
      modeLabel.textContent = "Pixel Mode";
    }
  }
});
