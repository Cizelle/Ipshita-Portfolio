document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");
  const projectsData = {
    notesplay: {
      title: "NotesPlay",
      heroImage: "images/notesplay-full-screen.png",
      description: `NotesPlay is a native Android application developed using Kotlin, designed to revolutionize the way students and professionals manage their study notes. It offers robust features including typed note-taking, handwritten note capture, and advanced text extraction from images using Firebase ML Kit's Optical Character Recognition (OCR). This app significantly enhances active recall through its integrated quiz generation feature, converting notes into interactive assessments.
                          <br><br>
                          The core challenge was to provide a seamless note-taking experience while incorporating powerful machine learning capabilities for text extraction and intelligent quiz generation, all within a responsive and intuitive Android UI.`,
      techStack: [
        "Android",
        "Kotlin",
        "Firebase ML Kit",
        "Local Storage",
        "Jetpack Compose (if applicable)",
      ],
      githubLink: "https://github.com/Cizelle/NotesPlayy",
      liveDemo: "Link to a demo video or play store (if applicable)",
      features: [
        "Typed & Handwritten Note Capture",
        "OCR Text Extraction from Images",
        "AI-powered Quiz Generation from Notes",
        "Secure Local Storage for Data",
      ],
      problem:
        "Students often struggle with organizing notes from various sources (typed, handwritten, images) and lack effective tools for active recall and self-assessment.",
      solution:
        "NotesPlay provides a centralized platform for diverse note formats, utilizing OCR for efficient content digitization and integrating a quiz generator to facilitate active learning and memory retention.",
      impact:
        "Streamlined note management, improved study efficiency through active recall, and simplified content digitization for users.",
    },
    donora: {
      title: "Donora",
      heroImage: "images/donora-full-screen.png",
      description: `Donora is a groundbreaking decentralized platform built with Python, Flask, and blockchain technology, aimed at revolutionizing the organ donation and transplantation process. It provides a secure, transparent, and efficient system for managing donor and recipient information, ensuring real-time compatibility verification and immutable records powered by a custom blockchain implementation.
                          <br><br>
                          The primary goal was to overcome the inefficiencies and lack of trust inherent in traditional organ donation systems by leveraging decentralized ledger technology to enhance transparency and security.`,
      techStack: [
        "Python",
        "Flask",
        "Blockchain",
        "HTML",
        "CSS",
        "JavaScript",
        "Web3.js (if applicable)",
      ],
      githubLink: "https://github.com/Cizelle/Donora",
      liveDemo: "Link to a demo video or deployed site (if applicable)",
      features: [
        "Decentralized Donor/Recipient Registry",
        "Real-time Compatibility Matching",
        "Blockchain-backed Immutable Records",
        "Enhanced Transparency and Security",
      ],
      problem:
        "The traditional organ donation process suffers from transparency issues, inefficient record-keeping, and potential for fraud, leading to delays and mistrust.",
      solution:
        "Donora introduces a blockchain-based system that ensures tamper-proof records, automated compatibility checks, and a transparent ledger for all transactions, thereby increasing trust and efficiency.",
      impact:
        "Significant reduction in processing times for organ matching, increased trust among stakeholders, and a more secure and transparent system for organ donations.",
    },
  };

  const project = projectsData[projectId];

  if (project) {
    document.getElementById("detail-project-title").textContent = project.title;
    document.getElementById(
      "detail-project-description"
    ).innerHTML = `<p>${project.description}</p>`;

    // Display tech stack
    const techStackContainer = document.getElementById(
      "detail-project-tech-stack"
    );
    techStackContainer.innerHTML = "<h4>Technologies Used:</h4>";
    const techList = document.createElement("ul");
    project.techStack.forEach((tech) => {
      const listItem = document.createElement("li");
      listItem.textContent = tech;
      techList.appendChild(listItem);
    });
    techStackContainer.appendChild(techList);

    const linksContainer = document.getElementById("detail-project-links");
    linksContainer.innerHTML = "";
    if (project.liveDemo) {
      linksContainer.innerHTML += `<a href="${project.liveDemo}" target="_blank" class="button">Live Demo</a>`;
    }
    if (project.githubLink) {
      linksContainer.innerHTML += `<a href="${project.githubLink}" target="_blank" class="button github-button">GitHub Repo</a>`;
    }

    const heroImageContainer = document.getElementById("detail-project-hero");
    if (project.heroImage) {
      heroImageContainer.innerHTML = `<img src="${project.heroImage}" alt="${project.title} Screenshot" class="detail-hero-image">`;
    }

    const psiContainer = document.getElementById(
      "detail-project-problem-solution-impact"
    );
    if (project.problem) {
      psiContainer.innerHTML += `<h4>The Problem:</h4><p>${project.problem}</p>`;
    }
    if (project.solution) {
      psiContainer.innerHTML += `<h4>My Solution:</h4><p>${project.solution}</p>`;
    }
    if (project.impact) {
      psiContainer.innerHTML += `<h4>The Impact:</h4><p>${project.impact}</p>`;
    }
  } else {
    document.getElementById("project-detail-content").innerHTML = `
            <h2 class="section-heading">Project Not Found</h2>
            <p>Sorry, the project you are looking for does not exist.</p>
            <a href="index.html#projects" class="button">Back to Projects</a>
        `;
  }
});
