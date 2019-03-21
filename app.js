function onReady() {
  let toDos = []; //Our state is going to be an array of to-dos
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo() { //update our array of to-dos
      const newToDoText = document.getElementById('newToDoText');
      if (!newToDoText.value) { return; } //prevents empty to do

      toDos.push({
        title: newToDoText.value, //assign the value of the text input, newToDoText to the title key
        complete: false,
        id: id++,
      });

      newToDoText.value = '';

      renderTheUI(); //This is called when the state changes
    }

    function renderTheUI() {
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        const deleteBtn = document.createElement('button');
          deleteBtn.type = "delete";
          deleteBtn.textContent = "delete";

        deleteBtn.addEventListener('click', event => {
          toDos = toDos.filter(function(item) {
            return item.id !== toDo.id;
          })
          renderTheUI();
        });

        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi); //the DOM
        newLi.appendChild(checkbox);
        newLi.appendChild(deleteBtn);
      });
    }

    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
    });

    renderTheUI();

window.onload = function() {
     onReady();
 };
