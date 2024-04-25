import { addTaskModal } from './task-modal';
import { addProjectModal } from './project-modal';
import { displayAllTasksPageLoad, displayTodaysTasks, displayUpcomingTasks, displayAllTasks } from './display-task';
import { displayProject } from './display-project';



document.addEventListener('DOMContentLoaded', displayAllTasksPageLoad);
document.addEventListener('DOMContentLoaded', displayProject);

addTaskModal();
addProjectModal();

const allTasksButton = document.querySelector('#all-tasks-button');
allTasksButton.addEventListener('click', displayAllTasks);

const todayButton = document.querySelector('#today-button');
todayButton.addEventListener('click', displayTodaysTasks);

const upcomingButton = document.querySelector('#upcoming-button');
upcomingButton.addEventListener('click', displayUpcomingTasks);




//click project title will display tasks for that project


//have today's tasks show up on initial page load?
//if click on 'project', have projects appear in main container?
//if click on a project, tasks for that project should appear
//style task modal
//style project modal