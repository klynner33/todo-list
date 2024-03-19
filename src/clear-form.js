

export function clearForm() {
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