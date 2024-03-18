import { CreateTask } from './create-task';

export function addTaskModal() {
const dialog = document.querySelector('.add-todo-modal');
const openModalButton = document.querySelector('.add-task-button');
const closeModalButton = document.querySelector('.close-modal-button');
const overlay = document.querySelector('.overlay');
const addButton = document.querySelector('.add-task-modal-button')
const title = document.querySelector('#title');
const desc = document.querySelector('#description');
const dueDate = document.querySelector('#dueDate');
const priority = document.querySelector('#priority');
const notes = document.querySelector('#notes');

openModalButton.addEventListener('click', () => {
  dialog.showModal();
  overlay.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  dialog.close();
  overlay.style.display = 'none';
});

addButton.addEventListener("click", () => {
  event.preventDefault();
  const newTask = new CreateTask(title.value, desc.value, dueDate.value, priority.value, notes.value);
    newTask.displayTask();
    title.value = '';
    desc.value = '';
    dueDate.value = '';
    priority.selectedIndex = 0;
    notes.value = '';
});


}