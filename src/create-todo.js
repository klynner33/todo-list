

export class CreateTodo {
  constructor(title, description, dueDate, completed) {
    this.title = title;
    this.description = description;
  }

  showTitle() {
    console.log(`Is this working? ${this.title}`);

    const addTaskButton = document.querySelector('.add-task-modal-button');
    const title = document.querySelector('#title');
    const desc = document.querySelector('#description');
    const dueDate = document.querySelector('#dueDate');
    const priority = document.querySelector('#priority');
    const notes = document.querySelector('#notes');

    addTaskButton.addEventListener('click', () => {
      console.log(title.value);
      console.log(desc.value);
      console.log(dueDate.value);
      console.log(priority.value);
      console.log(notes.value);
    });
  }

  

};




//create a todo with a title, description, due date, completed, 