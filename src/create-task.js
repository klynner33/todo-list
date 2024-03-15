

export class CreateTask {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }

  displayTask() {
    console.log(`${this.title} ${this.description} ${this.dueDate} ${this.priority} ${this.notes}`);
    const dialog = document.querySelector('.add-todo-modal');
    dialog.close();
    // Element.classList.remove('');
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';

  }

  

};




//create a todo with a title, description, due date, completed, 