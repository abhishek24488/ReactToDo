var React = require('react');
var {connect}= require('react-redux');
var actions= require('actions');
var createReactClass= require('create-react-class');

var TodoSearch= createReactClass({
    
    handleSearch: function(){
       // var showCompleted= this.refs.showCompleted.checked;
        //var searchText= this.refs.searchText.value;        
       // this.props.onSearch(showCompleted, searchText);
        
        console.log(searchText+"---"+showCompleted);

    },
    render() {
        var {dispatch,searchText,showCompleted}= this.props;
        return (
           <div>
                <div>
                    <input type="text" ref="searchText"placeholder="search" value={searchText}  onChange={()=>{
                        var searchText= this.refs.searchText.value; 
                        dispatch(actions.setSearchText(searchText));
                    }}/>
                    
                </div>
                <div>
                    <label>
                    <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{

                        dispatch(actions.toggleShowCompleted());
                    }}/>
                    Show Completed task
                    </label>
                </div>
           </div>
        );
    }
});

module.exports= connect((state)=>{
    return {
        showCompleted:state.showCompleted,
        searchText:state.searchText
    }
}) (TodoSearch);