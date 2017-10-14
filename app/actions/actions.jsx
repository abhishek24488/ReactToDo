import firebase,{firebaseRef, githubProvider,provider} from "../firebase/firebase";
import moment from 'moment';


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

export var removeTodo= (id)=> {
  return (dispatch, getState)=>{
    var uid = getState().auth.uid;
    var todoRef= firebaseRef.child(`users/${uid}/todos/${id}`).remove();
    //console.log(todoRef);
    }  
};

export var updateTodo = (id,updates) => { 
  return { 
    type: 'TOGGLE_TODO',
    id,
    updates
  };
};

export var updateNewTodo= (id,updatesTask)=> {
  return {
    type : 'UPDATE NEWTASK',
    id,
    updatesTask
  };
};

export var startAddTodos = () => {
  return (dispatch, getState)=>{
    var uid = getState().auth.uid;
    console.log(uid);
    var todosRef= firebaseRef.child(`users/${uid}/todos`);

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
      completed: false,
      updated:false,
      createdAt: moment().unix(),
      updatedAt: null,
      completedAt: null
    };
    var uid = getState().auth.uid;
    var todoRef= firebaseRef.child(`users/${uid}/todos`).push(todo);
    return todoRef.then(()=>{
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    })
  };
}

export var startToggleTodo = (id, completed) => { 
  return (dispatch, getState)=>{ 
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    var updates ={
      id,
      completed,
      completedAt: completed ? moment().unix() : null
    };
    return todoRef.update(updates).then(()=>{
      dispatch(updateTodo(id,updates));
    });
  };
};

export var UpdateUserTak = (id, text,updated) => { 
  return (dispatch, getState)=>{ 
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    var updatesTask ={
      text,
      updated,
      updatedAt: updated ? moment().unix() : null
    };
    return todoRef.update(updatesTask).then(()=>{
      dispatch(updateNewTodo(id,updatesTask));
    });
  };
};

//toggle Show Completed
export var toggleShowCompleted = () => {
  return {
    type : 'TOGGLE_SHOW_COMPLETED',
    
  }
}
export var setSearchText= (searchText) => {
  return { // action object
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// toggle completed todo

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
    var uid = getState().auth.uid;
    firebase.auth().signInWithEmailAndPassword(username,password).then((result)=>{
      console.log("Authentication Workd", result);
      //dispatch(login(result.user.uid));
      //dispatch(startAddTodos());
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