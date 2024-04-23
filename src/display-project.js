// import { CreateProject } from './create-project';

export function displayProject() {
  let projects = JSON.parse(localStorage.getItem('projects')) || [];

  const projectList = document.querySelector('.all-projects-container');
    projectList.innerHTML = '';

    projects.forEach(project => {
      const li = document.createElement('li');
      const priorityElement = document.createElement('span');
      const titleElement = document.createElement('span');

      priorityElement.innerHTML = `<i class="fa-solid fa-hashtag"></i>`;
        if (project.priority === 'low') {
          priorityElement.style.color = `#63E6BE`;
        } else if (project.priority === 'medium') {
          priorityElement.style.color = `#FFA500`;
        } else {
          priorityElement.style.color = `#FF0000`;
        }
      titleElement.textContent = project.title;

      priorityElement.classList.add('project-priority');
      titleElement.classList.add('project-title');

      li.appendChild(priorityElement);
      li.appendChild(titleElement);

      const deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
          projects = projects.filter(p => p !== project);
          localStorage.setItem('projects', JSON.stringify(projects));
        li.remove();
    });

    li.appendChild(deleteButton);
    li.classList.add('project-item');
    projectList.appendChild(li);
    });

 
}

