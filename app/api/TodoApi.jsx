var $ = require('jquery');


module.exports = {
    setTodos: function (todos) {
        if($.isArray(todos)){
            localStorage.setItem('todos',JSON.stringify(todos));
            console.log(todos);
            return todos;
        }
    },
    getTodos: function(){
        var stringTodos = localStorage.getItem('todos');
        console.log(stringTodos);
        var todos=[];
        try{
            todos= JSON.parse(stringTodos);
            //console.log(todos);
        }catch(e){

        }

        //return $.isArray(todos) ? todos : [];
         if($.isArray(todos)){
            return todos;            
        }else {
            return [];
        } 
    },

    filterTodos: function(todos, searchText, showCompleted){
        var filterTodos = todos;

        // filter by showCompleted filter accepts upto three callback and calls only one for every item in an array
        filterTodos = filterTodos.filter((todo)=>{
            return !todo.completed || showCompleted; // Toshow completed & non-completed when we checked the checkbox
        })
        // filter by search text
        filterTodos = filterTodos.filter((todo)=>{
            var text = todo.text.toLowerCase();
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        })

        //Sort todo task by non completed
        filterTodos=filterTodos.sort((a,b)=>{
            if(!a.completed && b.completed)
                return -1;
            else if(a.completed && !b.completed)
                return 1;
            else
                return 0;
        })


        return filterTodos;
    }
};

