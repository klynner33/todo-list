

export class CreateTodo {
  constructor(title, description, dueDate, completed) {
    this.title = title;
    this.description = description;
  }

  showTitle() {
    console.log(`Is this working? ${this.title} ${this.description}`);
  }

};




//create a todo with a title, description, due date, completed, 