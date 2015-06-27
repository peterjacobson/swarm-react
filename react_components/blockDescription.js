var React = require('react')
var imgStyle = {
	width: '30%'
};
 
var Textarea = require('react-textarea-autosize');

module.exports = React.createClass({
	render: function () {
		return (
				<div>
					<Textarea></Textarea>
					<img src="img/691px-Gnu_meditate_levitate.png"></img>
				</div>
			)
	}
})