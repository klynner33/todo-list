// import { CreateTask } from './create-task';
import { format, parseISO } from 'date-fns';

export function displayTask() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const todoList = document.querySelector('.todo-list');
  todoList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    const titleElement = document.createElement('span');
    const descriptionElement = document.createElement('p');
    const dueDateElement = document.createElement('span');
    const priorityElement = document.createElement('span');
    const notesElement = document.createElement('p');

    titleElement.textContent = `Title: ${task.title}`;
    descriptionElement.textContent = `Description: ${task.description}`;
    dueDateElement.textContent = `Due Date: ${task.dueDate ? format(parseISO(task.dueDate), "MM/dd/yyyy") : ''}`;
    priorityElement.textContent = `Priority: ${task.priority}`;
    notesElement.textContent = `Notes: ${task.notes}`;

    titleElement.classList.add('task-title');
    descriptionElement.classList.add('task-description');
    dueDateElement.classList.add('task-due-date');
    priorityElement.classList.add('task-priority');
    notesElement.classList.add('task-notes');

    li.appendChild(titleElement);
    li.appendChild(descriptionElement);
    li.appendChild(dueDateElement);
    li.appendChild(priorityElement);
    li.appendChild(notesElement);

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
