
import { format, parseISO, addDays, isWithinInterval } from 'date-fns';

export function displayTask(tasks) {
  const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    const titleElement = document.createElement('span');
    const descriptionElement = document.createElement('p');
    const dueDateElement = document.createElement('span');
    const priorityElement = document.createElement('span');
    const notesElement = document.createElement('p');
    const projectElement = document.createElement('span');

    titleElement.textContent = `Title: ${task.title}`;
    descriptionElement.textContent = `Description: ${task.description}`;
    dueDateElement.textContent = `Due Date: ${task.dueDate ? format(parseISO(task.dueDate), "MM/dd/yyyy") : ''}`;
    priorityElement.textContent = `Priority: ${task.priority}`;
    notesElement.textContent = `Notes: ${task.notes}`;
    projectElement.textContent = `Project: ${task.project}`;

    titleElement.classList.add('task-title');
    descriptionElement.classList.add('task-description');
    dueDateElement.classList.add('task-due-date');
    priorityElement.classList.add('task-priority');
    notesElement.classList.add('task-notes');
    projectElement.classList.add('task-project');

    li.appendChild(titleElement);
    li.appendChild(descriptionElement);
    li.appendChild(dueDateElement);
    li.appendChild(priorityElement);
    li.appendChild(notesElement);
    li.appendChild(projectElement);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      tasks = tasks.filter(t => t !== task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      li.remove();
    });

    li.appendChild(deleteButton);
    li.classList.add('task-item');
    todoList.appendChild(li);
  });
}

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

  let todaysTasks = tasks.filter(task => format(parseISO(task.dueDate), "MM/dd/yyyy") === today);
  
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
