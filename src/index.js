//accessing the create-task-form & task-List

const createTaskForm = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");
//attach an event listener after access the create-task-form

createTaskForm.addEventListener("submit", (event) => {
  event.preventDefault(); //this will prevent the page from reloading

  // get the input value
  const description = document.getElementById("new-task-description").value;
  //make a list
  const myList = document.createElement("li");
  myList.textContent = description;
  //append the task to the list
  taskList.appendChild(myList);

  // auto-clear
  createTaskForm.reset();
});
