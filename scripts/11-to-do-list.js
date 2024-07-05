/*const todoList = [{
  name:'make dinner',
  dueDate:''},{name: 'wash dishes', dueDate:''}];
   
renderTodoList();

function renderTodoList(){

let todoListHTML = '';

for(let i=0;i<todoList.length;i++){
  const todo = todoList[i];
  const html = `
  <p>
    ${todo.name}
     <button onclick="
     todoList.splice(${i}, 1);
     render todoList();
     ">Delete</button>
     </p>`;
  todoListHTML+=html;
}
console.log(todoListHTML);

document.querySelector('.js-todo-list')
.innerHTML = html;//takes code created and puts it in html
}


function addTodo(){
  const inputElement = document.querySelector('js-name-input');
  const name= inputElement.value;//value represents the text in a textbox
  todoList.push({name: name,dueDate:''});//adds text in an array
  console.log(todoList);//outputs the added texts

  inputElement.value = '';//resets
}

  renderTodoList();*/

let todoList = [
  { name: 'make dinner', dueDate: '' },  // Corrected to object structure
  { name: 'wash dishes', dueDate: '' }   // Corrected to object structure
];

function renderTodoList() {  // Corrected function name
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `
      <p>
        ${todo.name}
        <button onclick="deleteTodo(${i})">Delete</button>
      </p>`;  // Corrected HTML string format
    todoListHTML += html;  // Corrected string concatenation
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;  // Corrected selector and assignment
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();  // Corrected function name
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');  // Corrected selector
  const name = inputElement.value;  // Correct
  todoList.push({ name: name, dueDate: '' });  // Corrected data structure
  console.log(todoList);  // Correct
  renderTodoList();  // Added call to update the list
}

// Initial call to render the list
renderTodoList();
