
const inputField = document.getElementById('inputField');
const addToDoButton = document.getElementById('addToDo');
const toDoContainer = document.getElementById('toDoContainer');

function createToDo() {
  const task = inputField.value;

  if (task.trim() !== '') {
    const toDoItem = document.createElement('div');
    toDoItem.classList.add('to-do');

    const taskText = document.createElement('span');
    taskText.innerText = task;

    taskText.addEventListener('click', function () {
      taskText.classList.toggle('done');
    });

    taskText.addEventListener('dblclick', function () {
      toDoItem.remove();
    });

    toDoItem.appendChild(taskText);

    toDoContainer.appendChild(toDoItem);

    inputField.value = '';
  }
}

addToDoButton.addEventListener('click', createToDo);

inputField.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    createToDo();
  }
});
