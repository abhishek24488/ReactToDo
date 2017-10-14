import firebase,{firebaseRef, githubProvider,provider} from "../firebase/firebase";


export var setSearchText= (searchText) => {
  return { // action object
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// toggle completed todo

export var startToggleTodo = (id, completed) => { 
  return (dispatch, getState)=>{ 
    //var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates ={
      completed
    };
    return todoRef.update(updates).then(()=>{
      dispatch(updateTodo(id,updates));
    });
  };
};

export var UpdateUserTak = (id, text) => { 
  return (dispatch, getState)=>{ 
    //var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates ={
      text
    };
    return todoRef.update(updates).then(()=>{
      dispatch(updateNewTodo(id,updates));
    });
  };
};
export var updateNewTodo= (id,newTask)=> {
  return {
    type : 'UPDATE NEWTASK',
    id,
    newTask
  };
};

export var updateTodo = (id,updates) => { 
  return { 
    type: 'TOGGLE_TODO',
    id,
    updates
  };
};

export var removeTodo= (id)=> {
  return (dispatch, getState)=>{
    var todoRef= firebaseRef.child(`todos/${id}`).remove();
    }
  //dispatch(actions.startAddTodos());
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

 export var startAddTodos = () => {
  return (dispatch, getState)=>{
    //var uid = getState().auth.uid;
    var todosRef= firebaseRef.child("todos");

    return todosRef.once('value').then((snapshot)=>{
      var todos= snapshot.val()|| {};
      var parsedTodos =[];

      Object.keys(todos).forEach((todoId)=> {
        parsedTodos.push({
            id: todoId,
            ...todos[todoId]
          });
      });

      dispatch(addTodos(parsedTodos));  
    });
  };
} 

export var startAddTodo = (text) => {
  return (dispatch, getState)=>{
    var todo ={
      //id: uuid(),
      //text: action.text,
      text,
      completed: false
    };
    var uid = getState().auth.uid;
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
export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export var startLogin= (username,password)=> {
  return (dispatch,getState) => {
    //which provider wannna login
    /* firebase.auth().signInWithPopup(githubProvider).then((result)=>{
      console.log("Authentication Workd", result);
    }, (error)=>{
      console.log("Unable to auth", error);
    }); */
    firebase.auth().signInWithEmailAndPassword(username,password).then((result)=>{
      console.log("Authentication Workd", result);
    }, (error)=>{
      console.log("Unable to auth", error);
    })
  };
};

export var startLogout= ()=> {
  return (dispatch,getState) => {
    firebase.auth().signOut().then(()=>{
      console.log("Logged Out");
    });
  };
};