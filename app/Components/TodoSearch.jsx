var React = require('react');
var createReactClass= require('create-react-class');

var TodoSearch= createReactClass({
    handleSearch: function(){
        var showCompleted= this.refs.showCompleted.checked;
        var searchText= this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    },
    render() {

        return (
           <div>
                <div>
                    <input type="text" ref="searchText"placeholder="search" onChange={this.handleSearch}/>
                    
                </div>
                <div>
                    <label>
                    <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                    Show Completed task
                    </label>
                </div>
           </div>
        );
    }
});

module.exports=TodoSearch;