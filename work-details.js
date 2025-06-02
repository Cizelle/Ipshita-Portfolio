document.addEventListener("DOMContentLoaded", () => {
  const workExperiences = [
    {
      id: "java-dev",
      title: "Java Developer Internship",
      company: "Cognorise Infotech",
      role: "Java Developer",
      description: `
                <p>During my Java Developer Internship at Cognorise Infotech, I was immersed in a dynamic environment where I honed my backend development skills. My responsibilities included designing and implementing robust APIs, optimizing database queries, and contributing to the overall architecture of scalable web applications.</p>
                <p>I gained hands-on experience with Spring Boot, Hibernate, and various SQL/NoSQL databases. A key project involved developing a new module for inventory management, which led to a 15% reduction in data processing time. I also actively participated in code reviews and utilized Agile methodologies for iterative development.</p>
            `,
      skills: `
                <ul>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>RESTful APIs</li>
                    <li>SQL (PostgreSQL)</li>
                    <li>Hibernate</li>
                    <li>Git</li>
                    <li>Agile Methodologies</li>
                </ul>
            `,
      learnings: `
                <ul>
                    <li>Mastered practical application of Spring Boot for enterprise solutions.</li>
                    <li>Understood the importance of database optimization for large datasets.</li>
                    <li>Improved collaboration skills through daily stand-ups and code reviews.</li>
                    <li>Learned to adapt quickly to new tech stacks and project requirements.</li>
                </ul>
            `,
      images: [
        {
          src: "images/cogno2.png",
          alt: "Offer Letter",
        },
        { src: "images/cogno1.png", alt: "Completion Certificate" },
      ],
    },
    {
      id: "victors-club",
      title: "Development and Innovation Board Lead",
      company: "Victors Club",
      role: "Board Lead",
      description: `
                <p>As the Development and Innovation Board Lead at Victors Club, I spearheaded initiatives to foster creativity and technological growth among members. My role involved organizing workshops, mentoring junior developers, and overseeing the development of internal tools and projects.</p>
                <p>I successfully launched a "Tech Challenge" series that engaged over 100 students and resulted in several innovative prototypes. I also managed a team of 5 developers on a club management system project, ensuring timely delivery and adherence to best practices. This experience significantly enhanced my leadership, project management, and mentorship abilities.</p>
            `,
      skills: `
                <ul>
                    <li>Project Management</li>
                    <li>Team Leadership</li>
                    <li>Mentorship</li>
                    <li>Event Organization</li>
                    <li>Strategic Planning</li>
                    <li>Public Speaking</li>
                </ul>
            `,
      learnings: `
                <ul>
                    <li>Developed strong leadership skills in a community setting.</li>
                    <li>Improved ability to manage multiple projects concurrently.</li>
                    <li>Gained insights into fostering innovation and engaging a tech community.</li>
                    <li>Understood the nuances of effective team delegation and motivation.</li>
                </ul>
            `,
      images: [
        {
          src: "images/victors1.jpeg",
          alt: "Board Lead",
        },
        {
          src: "images/victors2.jpeg",
          alt: "Victors Club Event",
        },
      ],
    },
    {
      id: "gdsc",
      title: "Web Dev Volunteer",
      company: "Google Developers Student Club",
      role: "Web Development Volunteer",
      description: `
                <p>My volunteering experience with the Google Developers Student Club (GDSC) allowed me to contribute to community-driven web development projects. I primarily focused on building and maintaining the club's official website, ensuring it was user-friendly and showcased upcoming events and resources.</p>
                <p>I worked with HTML, CSS, and JavaScript, gaining practical experience in frontend development and responsive design. I also assisted in teaching fundamental web development concepts to new members during workshops. This role provided a valuable opportunity to apply my skills in a collaborative, non-profit setting and engage with the broader developer community.</p>
            `,
      skills: `
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                    <li>Frontend Development</li>
                    <li>Community Engagement</li>
                </ul>
            `,
      learnings: `
                <ul>
                    <li>Solidified foundational web development concepts through practical application.</li>
                    <li>Learned to collaborate effectively on a shared codebase.</li>
                    <li>Gained experience in creating user-friendly interfaces.</li>
                    <li>Developed presentation skills by assisting in workshops.</li>
                </ul>
            `,
      images: [
        {
          src: "images/gdsc1.jpeg",
          alt: "GDSC Volunteer",
        },
        {
          src: "images/gdsc2.jpeg",
          alt: "GDSC Event",
        },
        {
          src: "images/gdsc3.jpeg",
          alt: "GDSC certificate",
        },
      ],
    },
  ];

  const experienceNavContainer = document.getElementById(
    "experience-navigation"
  );
  const detailContentPane = document.getElementById(
    "experience-detail-content"
  );

  function renderExperienceDetails(experience) {
    if (!experience) {
      detailContentPane.innerHTML = `<p>Experience details not found.</p>`;
      return;
    }

    let imagesHtml = "";
    if (experience.images && experience.images.length > 0) {
      imagesHtml = `
                <div class="content-section">
                    <h3>Visuals</h3>
                    <div class="experience-images">
                        ${experience.images
                          .map(
                            (img) => `<img src="${img.src}" alt="${img.alt}">`
                          )
                          .join("")}
                    </div>
                </div>
            `;
    }

    detailContentPane.innerHTML = `
            <h3 class="content-heading">${experience.title}</h3>
            <p class="content-company-role">${experience.role} at ${
      experience.company
    }</p>
            ${
              experience.description
                ? `<div class="content-section"><h3>Description</h3>${experience.description}</div>`
                : ""
            }
            ${
              experience.skills
                ? `<div class="content-section"><h3>Skills Utilized</h3>${experience.skills}</div>`
                : ""
            }
            ${
              experience.learnings
                ? `<div class="content-section"><h3>Learnings</h3>${experience.learnings}</div>`
                : ""
            }
            ${imagesHtml}
        `;
  }

  function createNavNode(experience) {
    const node = document.createElement("div");
    node.classList.add("experience-nav-node");
    node.setAttribute("data-id", experience.id);
    node.innerHTML = `
            <h4>${experience.company}</h4>
            <p>${experience.role}</p>
        `;

    node.addEventListener("click", () => {
      document
        .querySelectorAll(".experience-nav-node")
        .forEach((n) => n.classList.remove("active"));
      node.classList.add("active");
      renderExperienceDetails(experience);
    });

    return node;
  }

  workExperiences.forEach((experience) => {
    const navNode = createNavNode(experience);
    experienceNavContainer.appendChild(navNode);
  });

  const urlParams = new URLSearchParams(window.location.search);
  const targetExpId = urlParams.get("id");

  let initialExperience = workExperiences[0];
  if (targetExpId) {
    const foundExp = workExperiences.find((exp) => exp.id === targetExpId);
    if (foundExp) {
      initialExperience = foundExp;
    }
  }

  renderExperienceDetails(initialExperience);
  const initialNode = document.querySelector(
    `.experience-nav-node[data-id="${initialExperience.id}"]`
  );
  if (initialNode) {
    initialNode.classList.add("active");
    initialNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  const body = document.body;
  const savedMode = localStorage.getItem("portfolioMode");

  const modeSwitch = document.getElementById("modeSwitch");
  const modeLabel = document.getElementById("modeLabel");

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

  if (modeSwitch) {
    modeSwitch.addEventListener("change", () => {
      if (modeSwitch.checked) {
        body.classList.add("pixel-mode");
        localStorage.setItem("portfolioMode", "pixel");
        if (modeLabel) {
          modeLabel.textContent = "Professional Mode";
        }
      } else {
        body.classList.remove("pixel-mode");
        localStorage.setItem("portfolioMode", "professional");
        if (modeLabel) {
          modeLabel.textContent = "Pixel Mode";
        }
      }
    });
  }
});
