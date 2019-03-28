// Creating objects below.

var todosList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function() {
        console.log('My todos', this.todos);
    },
    addTodo: function(todo) { // method 
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};




// todosList.deleteTodo(2); // deleting item 3.
// todosList.changeTodo(0, 'first'); // adding 'first' in index 0.
// todosList.addTodo('hello'); add hello
// todosList; 
// todosList.displayTodos(); display