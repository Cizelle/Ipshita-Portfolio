document.addEventListener("DOMContentLoaded", () => {
  const workExperiences = [
    {
      id: "java-dev",
      title: "Java Developer Internship",
      company: "Cognorise Infotech",
      role: "Java Developer",
      description: `
    <p>During my one-month Java Developer Internship, I focused on enhancing my proficiency in Java development through a series of practical assignments. I was tasked with completing five distinct projects, each designed to challenge my problem-solving abilities and improve code efficiency.</p>
    <p>My responsibilities included developing Java-based solutions, optimizing their complexities, and ensuring proper version control by uploading completed work to GitHub. This experience provided a concentrated dive into practical Java application development and best practices for code management.</p>
`,
      skills: `
    <ul>
        <li>Java</li>
        <li>Object-Oriented Programming (OOP)</li>
        <li>Problem Solving</li>
        <li>Algorithm Optimization</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Version Control</li>
    </ul>
`,
      learnings: `
    <ul>
        <li>Gained hands-on experience in solving practical coding challenges using Java.</li>
        <li>Developed a deeper understanding of writing efficient and optimized Java code.</li>
        <li>Mastered essential version control workflows with Git and GitHub.</li>
        <li>Improved problem-solving techniques by tackling diverse programming tasks.</li>
        <li>Understood the importance of code structure and complexity reduction in real-world applications.</li>
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
    <p>My journey at Victors Club began as the Workshop and Training Lead, where I focused on empowering members through educational initiatives. Demonstrating strong leadership and a passion for community growth, I was subsequently promoted to Development and Innovation Board Lead.</p>
    <p>In this expanded role, I spearheaded initiatives to foster creativity and technological advancement among members. My responsibilities included conceptualizing and hosting numerous workshops, hackathons, and various technical events and competitions. I also played a key role in mentoring junior developers and overseeing the development of internal tools.</p>
    <p>Beyond technical oversight, I managed crucial logistical aspects, including overseeing Unstop listings and handling other operational management responsibilities for the board. This comprehensive experience significantly enhanced my leadership, event management, project coordination, and mentorship abilities within a dynamic community setting.</p>
`,
      skills: `
    <ul>
        <li>Project Management</li>
        <li>Team Leadership</li>
        <li>Mentorship</li>
        <li>Event Management & Organization</li>
        <li>Strategic Planning</li>
        <li>Public Speaking</li>
        <li>Community Engagement</li>
        <li>Platform Management (Unstop, etc.)</li>
    </ul>
`,
      learnings: `
    <ul>
        <li>Successfully transitioned into a higher leadership role, demonstrating adaptability and increased responsibility.</li>
        <li>Mastered the end-to-end process of planning, organizing, and executing large-scale technical events and competitions.</li>
        <li>Gained hands-on experience in effective team leadership, delegation, and fostering innovation within a community.</li>
        <li>Developed comprehensive project management skills, from technical oversight to logistical and platform management.</li>
        <li>Enhanced mentorship and public speaking abilities through guiding and engaging diverse groups of students.</li>
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
        {
          src: "images/victors_cert.png",
          alt: "Victors Club Certificate",
        },
      ],
    },
    {
      id: "gdsc",
      title: "Web Dev Volunteer",
      company: "Google Developers Student Club",
      role: "Web Development Volunteer",
      description: `
        <p>My volunteering experience with the Google Developers Student Club (GDSC) allowed me to contribute to impactful community-driven web development initiatives. I primarily focused on the development and maintenance of the club's hackathon website, ensuring it was user-friendly and effectively showcased updates.</p>
        <p>I gained practical experience in frontend development and responsive design using HTML, CSS, and JavaScript. Beyond website duties, I also provided technical support for various club events and hackathons, helping to ensure their smooth digital presence and operation. This role provided a valuable opportunity to apply my skills in a collaborative, non-profit setting and actively engage with the broader developer community.</p>
    `,
      skills: `
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>Frontend Development</li>
            <li>Website Maintenance</li>
            <li>Community Engagement</li>
            <li>Event Support</li>
        </ul>
    `,

      learnings: `
        <ul>
            <li>Solidified foundational web development concepts through practical application on a live club website.</li>
            <li>Learned to collaborate effectively on a shared codebase within a community environment.</li>
            <li>Gained experience in creating and maintaining user-friendly and responsive web interfaces.</li>
            <li>Understood the importance of digital presence and support for community events and initiatives.</li>
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
});
