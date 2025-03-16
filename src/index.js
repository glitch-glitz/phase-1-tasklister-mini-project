//accessing the create-task-form & task-List

const createTaskForm = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");
//attach an event listener after access the create-task-form

createTaskForm.addEventListener("submit", (event) => {
  event.preventDefault(); //this will prevent the page from reloading

  // get the input value
  // it will store the text typed in the task description
  const description = document.getElementById("new-task-description").value;
  //make a list container,
  const myList = document.createElement("li");
  //Set the Text Content of the list container
  myList.textContent = description;
  //append the task to the list
  taskList.appendChild(myList);

  // auto-clear
  createTaskForm.reset();
});
