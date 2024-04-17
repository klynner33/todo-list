import { CreateTask } from './create-task';
import { format } from 'date-fns';

export function taskToLocalStorage() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const title = document.querySelector('#title').value;
  const desc = document.querySelector('#description').value;
  const dueDate = document.querySelector('#dueDate').value;
  const priority = document.querySelector('#priority').value;
  const notes = document.querySelector('#notes').value;

  const newTask = new CreateTask(title, desc, dueDate, priority, notes);
  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));

}