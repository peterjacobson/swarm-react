var React = require('react');
var View = require('react-flexbox');
var Gnu = require('./gnu')
var Process = require('./process')
var ProgressStore = require('../alt_stores/ProgressStore')

var divStyle = {
	position: 'absolute',
	width: '100%',
}

module.exports = React.createClass({
	getInitialState: function() {
		console.log(ProgressStore.getState())
		return ProgressStore.getState()
	},
	render: function () {
		return (
			<div style={divStyle} className="container">
				<Gnu topMargin={this.state.gnuProgress} />
				<Process processProgress={this.state.processProgress} />
			</div>
		)
	}
})