
export var searchTextReducers = ( state= '',action)=> {
    switch(action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default :
            return state;
    };
};

export var showCompletedReducer = ( state = false, action )=> {
    switch(action.type) {
        case 'TOGGLE_ShOW_COMPLETED':
            return !state;
        default:
            return state;
    }
}