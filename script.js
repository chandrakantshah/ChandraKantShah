fetch("data.json")
  .then(res => res.json())
  .then(data => {

    // PROFILE
    document.getElementById("name").textContent = data.name;
    document.getElementById("role").textContent = data.role;
    document.getElementById("tagline").textContent = data.tagline;
    document.getElementById("email").href = "mailto:" + data.email;

    // PROJECTS
    let projectHTML = "";
    data.projects.forEach(p => {
      projectHTML += `
        <div class="card">
          <img src="${p.image}" alt="project image" onerror="this.src='me.jpeg'">
          <h3>${p.title}</h3>
          <p>${p.organizer}</p>
        </div>
      `;
    });
    document.getElementById("projects").innerHTML = projectHTML;

    // EXPERIENCE
    let expHTML = "";
    data.experience.forEach(e => {
      expHTML += `
        <div class="card">
          <h3>${e.name}</h3>
          <p>${e.desc}</p>
        </div>
      `;
    });
    document.getElementById("experience").innerHTML = expHTML;

    // SOCIAL
    document.getElementById("socials").innerHTML = `
      <a href="${data.social.github}" target="_blank"><i class="fab fa-github"></i></a>
      <a href="${data.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
    `;
  })
  .catch(err => {
    console.error("Error loading JSON:", err);
  });