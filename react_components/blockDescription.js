var $ = require('jquery');
var React = require('react');
var Textarea = require('react-textarea-autosize');

var textareaStyle = {
	border: 'none',
	resize: 'none',
	width: '20em',
	padding: '0.6em',
	margin: '0.6em',
}

module.exports = React.createClass({
  handleKeyUp: function(e) {
  	var userIntent = $(this.getDOMNode())[0].value
  	if (userIntent.length > 3) {
  		console.log('clear')
  	}

  },
	render: function () {
		return (
				<Textarea 
					onChange={this.handleKeyUp} 
					style={textareaStyle} 
					autoFocus>
				</Textarea>
			)
	}
})