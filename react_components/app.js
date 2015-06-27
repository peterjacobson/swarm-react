var React = require('react');
var BlockDescription = require('./blockDescription');
var Gnu = require('./gnu')

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<BlockDescription />
				<Gnu />
			</div>
		)
	}
})