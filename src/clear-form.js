

export function clearTaskForm() {
  const title = document.querySelector('#title');
  const desc = document.querySelector('#description');
  const dueDate = document.querySelector('#dueDate');
  const priority = document.querySelector('#priority');
  const notes = document.querySelector('#notes');
  title.value = '';
  desc.value = '';
  dueDate.value = '';
  priority.selectedIndex = 0;
  notes.value = '';
}


export function clearProjectForm() {
  const title = document.querySelector('#project-title');
  const priority = document.querySelector('#project-priority');
  title.value = '';
  priority.selectedIndex = 0;
}