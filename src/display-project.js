import { displayProjectTasks, displayTask } from "./display-task";

export function displayProject() {
  let projects = JSON.parse(localStorage.getItem('projects')) || [];

  let select = document.querySelector('#choose-project');
    select.innerHTML = "";

  let allTaskOption = document.createElement("option");
    allTaskOption.text = "All Tasks";
    allTaskOption.value = "all-tasks";
    
    select.appendChild(allTaskOption);

  const projectList = document.querySelector('.all-projects-container');
    projectList.innerHTML = '';

    projects.forEach(project => {

      let option = document.createElement("option");
      option.text = project.title;
      option.value = project.title;

    select.appendChild(option);

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
      titleElement.addEventListener('click', displayProjectTasks)

      priorityElement.classList.add('project-priority');
      titleElement.classList.add('project-title');

      li.appendChild(priorityElement);
      li.appendChild(titleElement);

    const deleteButton = document.createElement('button');
      deleteButton.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
      deleteButton.classList.add('delete-button');

      // let projectName = this.textContent;

      // let projectTasks = tasks.filter(task => {
      //   return task.project === projectName;
      // });

      deleteButton.addEventListener('click', () => {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        projects = projects.filter(p => p !== project);
        localStorage.setItem('projects', JSON.stringify(projects));
        li.remove();
        option.remove();
        console.log('Project title:', project.title);

        tasks = tasks.filter(task => task.project !== project.title);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log('Tasks after filtering:', tasks);
        displayTask(tasks);

      });

    li.appendChild(deleteButton);
    li.classList.add('project-item');
    projectList.appendChild(li);
    });

 
}