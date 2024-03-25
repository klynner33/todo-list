import { CreateTask } from './create-task';

export function displayTask() {
  let tasks = [];

  const title = document.querySelector('#title');
  const desc = document.querySelector('#description');
  const dueDate = document.querySelector('#dueDate');
  const priority = document.querySelector('#priority');
  const notes = document.querySelector('#notes');

  const newTask = new CreateTask(title.value, desc.value, dueDate.value, priority.value, notes.value);
  tasks.push(newTask);

  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');
  const allTasksContainer = document.querySelector('.all-tasks-container');
  allTasksContainer.appendChild(taskCard);

  const cardTitle = document.createElement('h2');
  cardTitle.textContent = `${newTask.title}`;
  taskCard.appendChild(cardTitle);

  const cardDesc = document.createElement('p');
  cardDesc.textContent = `Description: ${newTask.description}`;
  taskCard.appendChild(cardDesc);

  const cardDate = document.createElement('p');
  cardDate.textContent = `Due Date: ${newTask.dueDate}`;
  taskCard.appendChild(cardDate);

  const cardPriority = document.createElement('p');
  cardPriority.textContent = `Priority: ${newTask.priority}`;
  taskCard.appendChild(cardPriority);

  const cardNotes = document.createElement('p');
  cardNotes.textContent = `Notes: ${newTask.notes}`;
  taskCard.appendChild(cardNotes);
 
  const cardDelete = document.createElement('div');
  cardDelete.classList.add('delete-button');
  cardDelete.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
  taskCard.appendChild(cardDelete);

  cardDelete.addEventListener('click', () => taskCard.remove());
}

