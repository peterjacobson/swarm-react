var React = require('react');
var BlockDescription = require('./blockDescription');
var Gnu = require('./gnu')
var GnuMessage = require('./gnuMessage')

module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<BlockDescription />
				<Gnu />
				<GnuMessage />
			</div>
		)
	}
})