

/*  attempt #1 const taskField = document.querySelector(".todo-input")

document.querySelector('.add-todo').addEventListener("click", function() {
            if (taskField.value.length > 1 && taskField.value.length < 100) {
                return printTodos(todos)
                
            }
        }) */
        
        


        /* attempt #2 const taskField = document.querySelector(".todo-input")
        const text = taskField.value;
    
        document.querySelector('.add-todo').addEventListener("click", function() {
            if (taskField.value.length > 1 && taskField.value.length < 100) {
            return printTodo(addTodo(input.value));
                
                
            }
        })*/




        /* attempt #3 document.querySelector('.add-todo').addEventListener("click", function() {
            if (taskField.value.length > 1 && taskField.value.length < 100) {
                return printTodo(taskField.value)
                
            }
        })*/

        const taskField = document.querySelector('.todo-input');

        document.querySelector('.add-todo').addEventListener('click', function(){
        printTodo(addTodo(taskField.value));
        taskField.value = '';
        })
