



export var setSerachText= (searchText) => {
  return { // action object
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// toggle completed todo

export var toggleCompletedTodo = (id) => {
  return { 
    type: 'Toggle Completed Todo',
    id
  };
};

export var addTodo = (text) => {
  return {
    type: 'Add ToDo',
    text
  };
};

//toggle Show Completed
export var toggleCompletedTodo = () => {
  return {
    type : 'Toggle Show Completed',
    
  }
}
