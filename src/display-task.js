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

export function displayTodaysTasks() {
  console.log('test');
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let today = format(new Date(), 'MM-dd-yyyy'); // Formats today's date as MM-DD-YYYY
  console.log(today)

  // Filter tasks where the dueDate is today
  let todaysTasks = tasks.filter(task => task.dueDate === today);

  // Assuming you have a div or any container to display tasks
  const todoList = document.querySelector('.todo-list');
  todoList.innerHTML = ''; // Clear previous tasks displayed

  // Create elements for each task and append to the container
  todaysTasks.forEach(task => {
      let taskElement = document.createElement('li');
      taskElement.textContent = `Title: ${task.title}, Description: ${task.desc}`;
      todoList.appendChild(taskElement);
  });

  if (todaysTasks.length === 0) {
      todoList.textContent = 'No tasks for today.';
  }
}

