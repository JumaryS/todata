document.querySelector('.hide-complete').addEventListener('click', function(){
    const completeButton = document.querySelector('.hide-complete')
    
    if(completeButton.innerText === 'Hide Complete')
    {currentTodos = justNotComplete(currentTodos)
    completeButton.innerText ='Show Complete'
    }
    else if(completeButton.innerText === 'Show Complete'){
        currentTodos = [...todos]
    completeButton.innerText ='Hide Complete'
    }
    
    refreshTodos(currentTodos)
})