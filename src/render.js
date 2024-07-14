export const renderProjects = (projects) => {
  const projectContainer = document.querySelector(".project-continer");
  projectContainer.innerHTML = "";

  // Create a div for each project and append it to the nav
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.textContent = project.projectName;
    projectContainer.appendChild(projectDiv);
  });
};
