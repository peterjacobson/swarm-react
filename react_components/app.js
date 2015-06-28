var React = require('react');
var BlockDescription = require('./blockDescription');
var Gnu = require('./gnu')
var GnuMessage = require('./gnuMessage')
var divStyle = {
	position: 'absolute',
}

module.exports = React.createClass({
	render: function () {
		return (
			<div style={divStyle}>
				<BlockDescription />
				<Gnu />
				<GnuMessage />
			</div>
		)
	}
})