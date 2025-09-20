const todoList = [
  {
    name: "make dinner",
    dueDate: "2025-5-9",
  },
  {
    name: "wash dishes",
    dueDate: "2025-5-9",
  },
];

renderTodoList();
function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    html = `
  <div>${name}</div>
  <div> ${dueDate}</div>
  <button  class="delete-todo-button js-delete-button">Delete</button>
  `;

    todoListHTML += html;
  });

  console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  document
    .querySelectorAll(".js-delete-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector(".js-add-todo").addEventListener("click", () => {
  addTodo();
});
document
  .querySelector(".js-name-input")
  .addEventListener("keydown", (event) => {
    handleOnKeydown(event);
  });
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate,
  });
  console.log(todoList);

  inputElement.value = "";
  renderTodoList();
}

function handleOnKeydown(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}
// save the data
// Generate the HTML
// make it interactive
