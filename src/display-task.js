import { CreateTask } from './create-task';

export function displayTask() {
  const title = document.querySelector('#title');
  const desc = document.querySelector('#description');
  const dueDate = document.querySelector('#dueDate');
  const priority = document.querySelector('#priority');
  const notes = document.querySelector('#notes');

  const newTask = new CreateTask(title.value, desc.value, dueDate.value, priority.value, notes.value);
  const taskElement = document.createElement('div');
  taskElement.innerHTML = `
      <h2>${newTask.title}</h2>
      <p>Description: ${newTask.description}</p>
      <p>Due Date: ${newTask.dueDate}</p>
      <p>Priority: ${newTask.priority}</p>
      <p>Notes: ${newTask.notes}</p>
  `;
  const allTasksContainer = document.querySelector('.all-tasks-container');
  allTasksContainer.appendChild(taskElement);
 
  console.log(`${newTask.title} ${newTask.description} ${newTask.dueDate} ${newTask.priority} ${newTask.notes}`);
}