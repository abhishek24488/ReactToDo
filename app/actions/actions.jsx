



export var setSerachText= (searchText) => {
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

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

//toggle Show Completed
export var toggleShowCompleted = () => {
  return {
    type : 'TOGGLE_SHOW_COMPLETED',
    
  }
}


//Actions are placed and now needed to add reducers to handle it