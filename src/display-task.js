
import { format, parseISO, addDays, isWithinInterval } from 'date-fns';

export function displayTask(tasks) {
  const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    const titleDescContainer = document.createElement('div');
    const taskIconsContainer = document.createElement('div');
    const taskDetailsContainer = document.createElement('div');
    const titleElement = document.createElement('span');
    const descriptionElement = document.createElement('p');
    const dueDateElement = document.createElement('span');
    const priorityElement = document.createElement('span');
    const notesElement = document.createElement('p');
    const projectElement = document.createElement('span');
    const expandButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    const dialog = document.querySelector('.expand-task-modal');
    const overlay = document.querySelector('.overlay');

    const expandTitle = document.querySelector('.title-container');
    const expandDesc = document.querySelector('.description-container');
    const expandDueDate = document.querySelector('.due-date-container');
    const expandPriority = document.querySelector('.priority-container');
    const expandNotes = document.querySelector('.notes-container');
    const expandProject = document.querySelector('.project-container');

    titleElement.textContent = `${task.title}`;
    descriptionElement.textContent = `${task.description}`;
    expandButton.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
    deleteButton.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;

    titleDescContainer.classList.add('title-desc-container');
    taskDetailsContainer.classList.add('task-details-container');
    taskIconsContainer.classList.add('task-icons-container');
    titleElement.classList.add('task-title');
    descriptionElement.classList.add('task-description');
    dueDateElement.classList.add('task-due-date');
    priorityElement.classList.add('task-priority');
    notesElement.classList.add('task-notes');
    projectElement.classList.add('task-project');
    expandButton.classList.add('expand-button');
    deleteButton.classList.add('delete-button');

    li.appendChild(titleDescContainer);
    li.appendChild(taskDetailsContainer);
    li.appendChild(taskIconsContainer);
    titleDescContainer.appendChild(titleElement);
    titleDescContainer.appendChild(descriptionElement);
    taskDetailsContainer.appendChild(dueDateElement);
    taskDetailsContainer.appendChild(priorityElement);
    taskDetailsContainer.appendChild(notesElement);
    taskDetailsContainer.appendChild(projectElement);
    taskIconsContainer.appendChild(expandButton);
    taskIconsContainer.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
      tasks = tasks.filter(t => t !== task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      li.remove();
    });

    expandButton.addEventListener('click', () => {
      expandTitle.textContent = `${task.title}`;
      expandDesc.textContent = `${task.description}`;
      expandDueDate.textContent = `Due Date: ${task.dueDate ? format(parseISO(task.dueDate), "MM/dd/yyyy") : ''}`;
      expandPriority.textContent = `Priority: ${task.priority}`;
      expandNotes.textContent = `Notes: ${task.notes}`;
      expandProject.textContent = `Project: ${task.project}`;

      dialog.showModal();
      overlay.style.display = 'block';
    })

    li.classList.add('task-item');
    todoList.appendChild(li);
  });
}

const expandClose = document.querySelector('.close-container');
const dialog = document.querySelector('.expand-task-modal');
const overlay = document.querySelector('.overlay');

expandClose.addEventListener('click', (event) => {
  event.preventDefault();
  dialog.close();
  overlay.style.display = 'none';
});

export function displayAllTasksPageLoad() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  displayTask(tasks);
}

export function displayAllTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  displayTask(tasks);
}

export function displayTodaysTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let today = format(new Date(), 'MM/dd/yyyy');
  const todoList = document.querySelector('.todo-list');
  todoList.innerHTML = '';

  let todaysTasks = tasks.filter(task => format(parseISO(task.dueDate), "MM/dd/yyyy") === today);
  console.log(todaysTasks);
  if (todaysTasks.length === 0) {
      todoList.textContent = 'No tasks for today.';
  } else{
    displayTask(todaysTasks);
  }
}

export function displayUpcomingTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let today = new Date();
  let endDay = addDays(today, 7);
  const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';

  let upcomingTasks = tasks.filter(task => {
    let taskDate = parseISO(task.dueDate);
    return isWithinInterval(taskDate, { start: today, end: endDay });
  });

  if (upcomingTasks.length === 0) {
    todoList.textContent = 'No upcoming tasks in the next 7 days.';
  } else {
    displayTask(upcomingTasks);
  }
}

export function displayProjectTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

   let projectName = this.textContent;

   let projectTasks = tasks.filter(task => {
     return task.project === projectName;
   });
 
   displayTask(projectTasks);
}
