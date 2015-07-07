var React = require('react')

var FormSection = require('./formSection');

var divStyle = {
	width: '23em'
}

var sections = [
	{
		title:'aim',
		message: "whououo... what is your aim, young gnu?",
	},
	{
		title:'context',
		message: "ah, and how are you trying to do it?",
	},
	{
		title:'issue',
		message: "hmmmm, and why isn't it working?",
	},
]

module.exports = React.createClass({
	getInitialState: function() {
		return {

		}
	},
	render: function() {
		return (
			<div 
				id="form"
				className="container flex-column"
				style={divStyle}>
				{sections.map( function(section) {
					return <FormSection section={section} />
				})}
			</div>
		)
	}
})