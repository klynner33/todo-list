import { CreateProject } from './create-project';

export function displayProject() {
  const title = document.querySelector('#project-title');
  const priority = document.querySelector('#project-priority');

  const newProject = new CreateProject(title.value, priority.value);
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project-div');
  const allProjectsContainer = document.querySelector('.all-projects-container');
  allProjectsContainer.appendChild(projectDiv);

  const projectPriority = document.createElement('span');
  projectPriority.innerHTML = `<i class="fa-solid fa-hashtag"></i>`;
  if(`${newProject.priority}` === 'low') {
    projectPriority.style.color = `#63E6BE`;
  }else if(`${newProject.priority}` === 'medium') {
    projectPriority.style.color = `#FFA500`;
  }else {
    projectPriority.style.color = `#FF0000`;
  }
  projectDiv.appendChild(projectPriority);

  const projectTitle = document.createElement('span');
  projectTitle.textContent = `${newProject.title}`;
  projectDiv.appendChild(projectTitle);

  //Delete a project
  const projectDelete = document.createElement('div');
  projectDelete.classList.add('delete-button');
  projectDelete.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
  projectDiv.appendChild(projectDelete);

  projectDelete.addEventListener('click', () => projectDiv.remove());
 
}

