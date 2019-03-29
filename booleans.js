// booleans: true or false
var todosList = {
    todos: [],
    displayTodos: function() {
        console.log('My todos', this.todos);
    },
    
    addTodo: function(todoText) { 
        this.todos.push({
            todotext: todoText,
            completed: false
        });
        this.displayTodos();
    },
    
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

todosList.addTodo('boolean testing');
//todosList.changeTodo(0, 'second try');
todosList.toggleCompleted(0);
