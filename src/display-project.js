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
  if(`${newProject.priority}` === 'low') {
    projectPriority.innerHTML = `<i class="fa-solid fa-hashtag"></i>`;
  }else if(`${newProject.priority}` === 'medium') {
    projectPriority.innerHTML = `<i class="fa-solid fa-hashtag"></i>`;
  }else {
    projectPriority.innerHTML = `<i class="fa-solid fa-hashtag"></i>`;
  }
  projectDiv.appendChild(projectPriority);

  const projectTitle = document.createElement('span');
  projectTitle.textContent = `${newProject.title}`;
  projectDiv.appendChild(projectTitle);

  
  
 
  // const cardDelete = document.createElement('div');
  // cardDelete.classList.add('delete-button');
  // cardDelete.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
  // taskCard.appendChild(cardDelete);

  // cardDelete.addEventListener('click', () => taskCard.remove());
}