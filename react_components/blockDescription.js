var $ = require('jquery');
var React = require('react');
var Textarea = require('react-textarea-autosize');

var textareaStyle = {
	border: 'none',
	resize: 'none',
}
var divStyle = {
	display: 'inline',
}

module.exports = React.createClass({
	// getInitalState: function() {
	// 	return {input: "kkljsdf"};
	// },
 //  handleKeyUp: function(e) {
 //  	this.setState({input: e.target.value})
 //  	console.log(input);
 //  },
	render: function () {
		// var input = this.state.input;
		return (
				<div style={divStyle}>
					<Textarea 
						// value={input} 
						// onChange={this.handleKeyUp} 
						style={textareaStyle} 
						autofocus>
					</Textarea>
				</div>
			)
	}
})