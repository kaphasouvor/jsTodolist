// thinking in code toggleAll

// booleans: true or false
var todosList = {
    todos: [],
    displayTodos: function() {
        // if statement; checkibng to see if the list is empty
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!');
        } else {
            console.log('My todos:');
            // for (intialization; condition; final-expression)
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText);
                }
            }
        }
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

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        
        // get number of completed todos.
        for(var i = 0; i < totalTodos; i++){
            if(this.todos[i].completed === true){
                completedTodos++;
            }
        }
        // Case 1: If evertyting is true, make everything false.
        if (completedTodos === totalTodos){
            // make everything false
            for (var i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
            // Case 1: otherwise, make everything false.
        }else{
            for(var i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};



//todosList.displayTodos();
todosList.addTodo('first');
todosList.addTodo('second');

//todosList.changeTodo(0, 'second try');
todosList.toggleCompleted(0);
//todosList.toggleCompleted(1);
todosList.toggleAll();
