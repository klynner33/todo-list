import { addTaskModal } from './task-modal';
import { addProjectModal } from './project-modal';
import { displayAllTasks, displayTodaysTasks, displayUpcomingTasks } from './display-task';

addTaskModal();
addProjectModal();

document.addEventListener('DOMContentLoaded', displayAllTasks);

document.querySelector('#today-button').addEventListener('click', displayTodaysTasks);
document.querySelector('#upcoming-button').addEventListener('click', displayUpcomingTasks);


//be able to pick which project the task goes into - default goes to 'all tasks'
//if click 'all tasks', all tasks should show up - all tasks = home screen. show tasks in date order
//if task is due today, it should show up in 'today'
//have today's tasks show up on initial page load
//if task is due in the next 7 days, it should show up in 'upcoming'
//if click on a project, tasks for that project should appear
//style task modal
//style project modal