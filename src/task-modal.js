export function task() {
  const dialog = document.querySelector('.add-todo-modal');
const openModalButton = document.querySelector('.add-task-button');
const closeModalButton = document.querySelector('.close-modal-button');
const overlay = document.querySelector('.overlay');

openModalButton.addEventListener('click', () => {
  dialog.showModal();
  overlay.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  dialog.close();
  overlay.style.display = 'none';
});
}