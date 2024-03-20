import { addTaskModal } from './task-modal';
import { addProjectModal } from './project-modal';

addTaskModal();
addProjectModal();



//be able to pick which project the task goes into - default goes to 'all tasks'
//if click 'all tasks', all tasks should show up - all tasks = home screen. show tasks in date order
//if task is due today, it should show up in 'today'
//if task is due in the next 7 days, it should show up in 'upcoming'
//build functionality for 'add project'