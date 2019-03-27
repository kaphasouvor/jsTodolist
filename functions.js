var todos = ['item1', 'item2', 'item3'];


// It should hsvde a function to display todos.
function displayTodos(){
    console.log('My todos: ', todos);
}

// It dhould have a function to add todos.
function addTodos(todo){
    todos.push(todo);
    displayTodos();
}

// It should have a function to change todos;
function changeTodo(position, newValue){ // two two perimeters 
    todos[position] = newValue;
    displayTodos();
}

// It should have a function to delete todos.
function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}

// Now calling/testing functions
displayTodos();
addTodos('item 4');
changeTodo(0, 'item 1a');
deleteTodo(2);


