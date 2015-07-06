var $ = require('jquery');
var React = require('react');
var Textarea = require('react-textarea-autosize');


var ENTER_KEY_CODE = 13;

module.exports = React.createClass({
	render: function () {
		var textareaStyle = {
			border: 'none',
			resize: 'none',
			padding: '0.6em',
			overflow: 'hidden',
			background: this.props.background,
		};
		return (
				<Textarea 
					id={this.props.id}
					className={this.props.isCollapsed}
					onChange={this.handleKeyUp} 
					onKeyDown={this._onKeyDown}
					onFocus={this.onFocus}
					onBlur={this.onBlur}
					style={textareaStyle} 
					autoFocus>
				</Textarea>
			)
	},
	getDefaultProps: function() {
    return {
      background: "rgba(250, 250, 250, 1)"
    };
  },
	onBlur: function(e) {
		console.log('blur');
		this.props.background = "rgba(250, 250, 250, 0.5)"
	},
	onFocus: function(e) {
		console.log('focus');
		this.props.background = "rgba(250, 250, 250, 1)"
	},
  handleKeyUp: function(e) {
  	var userIntent = $(this.getDOMNode())[0].value
  	if (userIntent.length > 3) {
  		console.log('clear')
  	}
  },
  _onKeyDown: function(event) {
  	if (event.keyCode === ENTER_KEY_CODE) {
  		console.log('enter');

  	}
  }
})