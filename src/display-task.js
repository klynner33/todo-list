import { CreateTask } from './create-task';
import { format, parseISO } from 'date-fns';

export function displayTask() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const title = document.querySelector('#title');
  const desc = document.querySelector('#description');
  const dueDate = document.querySelector('#dueDate');
  const priority = document.querySelector('#priority');
  const notes = document.querySelector('#notes');

const newTask = new CreateTask(title.value, desc.value, dueDate.value, priority.value, notes.value);
  tasks.push(newTask);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  // display tasks
  const todoList = document.querySelector('.todo-list');
  todoList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');

  // Create elements
  const titleElement = document.createElement('span');
  const descriptionElement = document.createElement('p');
  const dueDateElement = document.createElement('span');
  const priorityElement = document.createElement('span');
  const notesElement = document.createElement('p');

  // Set content for each element
  titleElement.textContent = `Title: ${task.title}`;
  descriptionElement.textContent = `Description: ${task.description}`;
  if(task.dueDate) {
  const formattedDueDate = format(parseISO(task.dueDate), "MM/dd/yyyy");
  dueDateElement.textContent = `Due Date: ${formattedDueDate}`;
  }else {
    dueDateElement.textContent = `Due Date:`;
  }
  priorityElement.textContent = `Priority: ${task.priority}`;
  notesElement.textContent = `Notes: ${task.notes}`;

  // Add classes to list items
  titleElement.classList.add('task-title');
  descriptionElement.classList.add('task-description');
  dueDateElement.classList.add('task-due-date');
  priorityElement.classList.add('task-priority');
  notesElement.classList.add('task-notes');

  // Append elements to the list item
  li.appendChild(titleElement);
  li.appendChild(descriptionElement);
  li.appendChild(dueDateElement);
  li.appendChild(priorityElement);
  li.appendChild(notesElement);

  // Create delete button
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