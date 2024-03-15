import { addTaskModal } from './task-modal';
import { CreateTask } from './create-task';

// Runs the task modal
addTaskModal();

// modal elements
const addTaskButton = document.querySelector('.add-task-modal-button');
const title = document.querySelector('#title');
const desc = document.querySelector('#description');
const dueDate = document.querySelector('#dueDate');
const priority = document.querySelector('#priority');
const notes = document.querySelector('#notes');

// add new task
addTaskButton.addEventListener('click', () => {
  const newTask = new CreateTask(title.value, desc.value, dueDate.value, priority.value, notes.value);
  newTask.displayTask();
});
