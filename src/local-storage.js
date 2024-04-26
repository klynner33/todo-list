import { CreateTask } from './create-task';
import { CreateProject } from './create-project';

export function taskToLocalStorage() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const title = document.querySelector('#title').value;
  const desc = document.querySelector('#description').value;
  const dueDate = document.querySelector('#dueDate').value;
  const priority = document.querySelector('#priority').value;
  const notes = document.querySelector('#notes').value;
  const project = document.querySelector('#choose-project').value;

  const newTask = new CreateTask(title, desc, dueDate, priority, notes, project);
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));

}

export function projectToLocalStorage() {
  let projects = JSON.parse(localStorage.getItem('projects')) || [];

  const title = document.querySelector('#project-title').value;
  const priority = document.querySelector('#project-priority').value;

  const newProject = new CreateProject(title, priority);
  projects.push(newProject);
  localStorage.setItem('projects', JSON.stringify(projects));

}