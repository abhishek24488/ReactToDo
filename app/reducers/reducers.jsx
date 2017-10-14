var uuid= require('node-uuid');
//var React= require('react');
var TodoApi = require('TodoApi')
export var searchTextReducer = ( state= '',action)=> {
    switch(action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default :
            return state;
    };
};

export var showCompletedReducer = ( state = false, action )=> {
    switch(action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    };
};

export var todosReducer = (state = [], action ) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                /*  {
                    id: uuid(),
                    text: action.text,
                    completed: false
                }  */ 
                {...action.todo}
            ];
        case 'REMOVE_TODO':
            return state.map((todo)=>{
                if(todo.id===action.id){
                    return {
                        
                    };
                }else{
                    return todo;
                }
            });

        case 'TOGGLE_TODO':
            return state.map((todo) =>   {
                if(todo.id === action.id){
                    /* var nextCompleted=  !todo.completed;
                    return {  
                        ...todo,                                               
                        completed: nextCompleted
                    }; */
                    return {
                        ...todo,
                        ...action.updates
                    };
                }     else{                    
                    return todo;                     
                    }              
            }); 
        
        case 'ADD_TODOS':
            return [
                ...state,
                ...action.todos
            ];
        case 'UPDATE NEWTASK':
            return state.map((todo)=>{
                if(todo.id=== action.id){
                    return {
                        ...todo,
                        ...action.newTask
                    };
                } else{                    
                    return todo;                     
                    }
            });
            ;
        case 'LOGOUT':
            return [];
          default:
            return state;
             
    };
};

 export var authReducer = (state = {}, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          uid: action.uid
        };
      case 'LOGOUT':
        return {};
      default:
        return state;
    }
  }; 