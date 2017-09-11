//Error Modal
var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var PropTypes = require('prop-types');


var ErrorModal = createReactClass({
    getDefaultProps: function(){
        return {
            title:'Error'
        };
    },
    propTypes: {
        title: PropTypes.string,
        message: PropTypes.string.isRequired
    },

    componentDidMount() {
        var {title, message} = this.props;
        var modalMarkup = (
          <div id="error-modal" className="reveal tiny text-center" data-reveal="">
            <h4>{title}</h4>
            <p>{message}</p>
            <p>
              <button className="button hollow" data-close="">
                Okay
              </button>
            </p>
          </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);
    
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },

    render: function(){
        var {title, message} = this.props;
        return (
      <div>
      </div>
    );
    }
});

module.exports=ErrorModal;