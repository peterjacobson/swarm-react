var React = require('react')

var GnuMessage = require('./gnuMessage')
var BlockDescription = require('./blockDescription');


var formStyle = {

}

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container flex-column">
				<GnuMessage />
				<BlockDescription />
			</div>
		)
	}
})