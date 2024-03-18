

export class CreateTask {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }

  displayTask() {
    event.preventDefault();
    const taskElement = document.createElement('div');
    taskElement.innerHTML = `
        <h2>${this.title}</h2>
        <p>Description: ${this.description}</p>
        <p>Due Date: ${this.dueDate}</p>
        <p>Priority: ${this.priority}</p>
        <p>Notes: ${this.notes}</p>
    `;
    const allTasksContainer = document.querySelector('.all-tasks-container');
    allTasksContainer.appendChild(taskElement);
   
    console.log(`${this.title} ${this.description} ${this.dueDate} ${this.priority} ${this.notes}`);
    const dialog = document.querySelector('.add-todo-modal');
    dialog.close();
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';

  }

};