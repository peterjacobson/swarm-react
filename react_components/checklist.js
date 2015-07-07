var React = require('react')

var Task = require('./task')

var tasks = [
	'error message read',
	'error message understood',
	'code indented',
	'bug isolated',
	'bug definitely isolated',
	'google queried > 4x',
	'assumptions revisited',
]

module.exports = React.createClass({
	render: function() {
		return (
			<ul className="checklist">
				{ tasks.map( function(task) {
					return <Task task={task} />
				}) }
			</ul>
		)
	}
})