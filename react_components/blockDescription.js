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
var focus = false;

module.exports = React.createClass({
	// componentDidMount: function() {
	// 	focus = true;
	// },
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
						autoFocus>
					</Textarea>
				</div>
			)
	}
})