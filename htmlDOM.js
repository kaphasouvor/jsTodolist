// version09 html and dom

// booleans: true or false
var todoList = {
    todos: [],

    addTodo: function(todoText) {
        this.todos.push({
            todotext: todoText,
            completed: false
        });
    },

    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
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
    }
};

// // 1. We want to get access to the display todos button.
// var displayTodosButton = document.getElementById('displayTodosButton');
// var toggleAllButton = document.getElementById("toggleAllButton");

// // 2. We want to run the display todos method 
// //    when someone click display todos button.
// displayTodosButton.addEventListener('click', function(){
//     todosList.displayTodos();
// });

// toggleAllButton.addEventListener('click', function(){
//     todosList.toggleAll();
// });

// Refactoring code Above
var handlers = {
    toggleAll: function(){
        todoList.toggleAll();
    },
    addTodo: function(){
        var addTodoTextInput = document.getElementById('addTodoTextInput'); 
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value='';
        view.displayTodos();
    },
    changeTodo: function(){
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value='';
        changeTodoTextInput.value='';
        view.displayTodos();

    },
    deleteTodo: function(){
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        view.displayTodos();

    },
    
    toggleCompleted: function(){
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
        toggleCompletedPositionInput.value = '';
        view.displayTodos();

    }
};
var view ={
    displayTodos: function(){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (var i= 0; i<todoList.todos.length;i++){
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoTextWithCompletion = '';
            
            if(todo.completed === true) {
                todoTextWithCompletion ='(x)' + todo.todoText;
            }else{
                todoTextWithCompletion ='( )' + todo.todoText;
            }
            
            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};