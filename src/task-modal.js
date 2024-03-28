import { displayTask } from './display-task';
import { clearTaskForm } from './clear-form';

export function addTaskModal() {
const dialog = document.querySelector('.add-todo-modal');
const openModalButton = document.querySelector('.add-task-button');
const closeModalButton = document.querySelector('.close-modal-button');
const overlay = document.querySelector('.overlay');
const addButton = document.querySelector('.add-task-modal-button')


openModalButton.addEventListener('click', () => {
  dialog.showModal();
  overlay.style.display = 'block';
  clearTaskForm();
});

closeModalButton.addEventListener('click', () => {
  event.preventDefault();
  dialog.close();
  overlay.style.display = 'none';
  clearTaskForm();
});

addButton.addEventListener("click", () => {
  event.preventDefault();
  displayTask();
  // const dialog = document.querySelector('.add-todo-modal');
  dialog.close();
  // const overlay = document.querySelector('.overlay');
  overlay.style.display = 'none';
  
});


}