var React = require('react')
var imgStyle = {
	width: '30%'
};
var textareaStyle = {
	border: 'none',
	resize: 'none'
}
 
var Textarea = require('react-textarea-autosize');

module.exports = React.createClass({
	// componentDidMount: function() {
 //      $(document.body).on('keyup', this.handleKeyUp);
 //  }

  // handleKeyUp: function(e) {
  // 	console.log(e.keyCode);
  // }

	render: function () {
		return (
				<div>
					<Textarea style={textareaStyle} autofocus>
						Wshsooooo... describe your bug, young one
					</Textarea>
					<img style={imgStyle} src="img/691px-Gnu_meditate_levitate.png"></img>
				</div>
			)
	}
})