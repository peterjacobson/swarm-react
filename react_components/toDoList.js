var React = require('react')

var Task = require('./task')

module.exports = React.createClass({
	render: function() {
		return (
			<ul className="toDo">
				<Task task={'error message read'} />
				<Task task={'error message understood'} />
				<Task task={'code indented'} />
				<Task task={'bug isolated'} />
				<Task task={'bug definitely isolated'} />
				<Task task={'google queried > 4x'} />
				<Task task={'assumptions revisited'} />
			</ul>
		)
	}
})