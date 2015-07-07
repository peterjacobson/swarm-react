var React = require('react')

var GnuMessage = require('./gnuMessage');
var BlockDescription = require('./blockDescription');

module.exports = React.createClass({
	getInitialState: function() {
		return {

		}
	},
	render: function() {
		return (
			<div id={this.props.section.title}>
				<GnuMessage
					id={this.props.section.title + "-help"} 
					message={this.props.section.message} />
				<BlockDescription 
					id={this.props.section.title + "-input"} />
			</div>
		)
	}
})