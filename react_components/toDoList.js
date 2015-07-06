var React = require('react')

var Task = require('./task')

module.exports = React.createClass({
	render: function() {
		return (
			<ul>
				<Task id={'to-do-1'}
					task={'indent code'} />
				<Task id={'to-do-2'}
					task={'isolate bug'} />
				<Task id={'to-do-3'}
					task={'> 4x google searches'} />
				<Task id={'to-do-4'}
					task={'revisit assumptions'} />
			</ul>
		)
	}
})