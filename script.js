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
    data.achievements.forEach(a => {
      projectHTML += `
        <div class="card">
          <img src="${a.image}" alt="">
          <h3>${a.title}</h3>
          <p>${a.organizer}</p>
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

  <a href="${data.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>

  <a href="${data.social.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>

  <a href="${data.social.x}" target="_blank"><i class="fab fa-x-twitter"></i></a>
`;
  })
  .catch(err => {
    console.error("Error loading JSON:", err);
  });
