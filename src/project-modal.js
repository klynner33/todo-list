import { displayProject } from './display-project';
import { clearProjectForm } from './clear-form';

export function addProjectModal() {
  const dialog = document.querySelector('.add-project-modal');
  const openModalButton = document.querySelector('.fa-plus');
  const closeModalButton = document.querySelector('.close-project-modal-button');
  const overlay = document.querySelector('.overlay');
  const addButton = document.querySelector('.add-project-modal-button')
  
  
  openModalButton.addEventListener('click', () => {
    dialog.showModal();
    overlay.style.display = 'block';
    clearProjectForm();
  });
  
  closeModalButton.addEventListener('click', () => {
    event.preventDefault();
    dialog.close();
    overlay.style.display = 'none';
    clearProjectForm();
  });
  
  addButton.addEventListener("click", () => {
    event.preventDefault();
    displayProject();
    const dialog = document.querySelector('.add-project-modal');
    dialog.close();
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
    
  });
  
  
  }