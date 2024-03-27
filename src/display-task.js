import { CreateTask } from './create-task';
import { format, parseISO } from 'date-fns';

let tasks = [];

export function displayTask() {
  
  const title = document.querySelector('#title');
  const desc = document.querySelector('#description');
  const dueDate = document.querySelector('#dueDate');
  const priority = document.querySelector('#priority');
  const notes = document.querySelector('#notes');

  // Parse the dueDate string to a Date object using date-fns
  const parsedDueDate = parseISO(dueDate.value);

  const newTask = new CreateTask(title.value, desc.value, parsedDueDate, priority.value, notes.value);
    tasks.push(newTask);

  // display tasks
  const todoList = document.querySelector('.todo-list');
  
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
  const formattedDueDate = format(new Date(task.dueDate), 'M/dd/yyyy');
  dueDateElement.textContent = `Due Date: ${formattedDueDate}`;
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
  
  // Add event listener to delete button
  deleteButton.addEventListener('click', () => {
    // Remove the parent <li> element when delete button is clicked
    li.remove();
    
  });
  
  // Append delete button to the li
  li.appendChild(deleteButton);

   // Add class to the li
   li.classList.add('task-item');
  
   // Append li to ul
  todoList.appendChild(li);
  });
}

