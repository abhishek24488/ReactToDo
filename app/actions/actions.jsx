import firebase,{firebaseRef} from "../firebase/firebase";


export var setSearchText= (searchText) => {
  return { // action object
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// toggle completed todo

export var toggleTodo = (id) => { 
  return { 
    type: 'TOGGLE_TODO',
    id
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState)=>{
    var todo ={
      //id: uuid(),
      //text: action.text,
      text,
      completed: false
    };
    var todoRef= firebaseRef.child('todos').push(todo);
    return todoRef.then(()=>{
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    })
  };
}

//toggle Show Completed
export var toggleShowCompleted = () => {
  return {
    type : 'TOGGLE_SHOW_COMPLETED',
    
  }
}
//Actions are placed and now needed to add reducers to handle it