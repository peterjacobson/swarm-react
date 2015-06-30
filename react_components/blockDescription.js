var $ = require('jquery');
var React = require('react');
var Textarea = require('react-textarea-autosize');

var textareaStyle = {
	border: 'none',
	resize: 'none',
	width: '20em',
	padding: '0.6em',
}
var divStyle = {
	// display: 'inline',
}

module.exports = React.createClass({
	// componentDidMount: function() {
	// 	focus = true;
	// },
	// getInitalState: function() {
	// 	return {input: "kkljsdf"};
	// },
  handleKeyUp: function(e) {
  	// this.setState({input: e.target.value})
  	var userIntent = $(this.getDOMNode()).children()[0].value
  	if (userIntent.length > 3) {
  		console.log('clear')
  	}

  },
	render: function () {
		// var input = this.state.input;
		return (
				<div style={divStyle}>
					<Textarea 
						// value={input} 
						onChange={this.handleKeyUp} 
						style={textareaStyle} 
						autoFocus>
					</Textarea>
				</div>
			)
	}
})