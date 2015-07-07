var React = require('react')

var Checklist = require('./checklist')
var Form = require('./form')

var divStyle = {
	width: '23em'
}

module.exports = React.createClass({
	getInitialState: function() {
		return {

		}
	},
	render: function() {
		return (
			<div 
				id="process"
				className="container flex-column"
				style={divStyle}>
				<Checklist />
				<Form />
			</div>
		)
	}
})