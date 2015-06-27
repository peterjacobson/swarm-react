var React = require('react')
// var textareaStyle = {
// 	'background-color': rgba(250, 250, 250, 0.5)
// };

require('babel/polyfill'); // polyfill is required 
 
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