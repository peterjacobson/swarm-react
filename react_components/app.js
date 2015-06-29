var React = require('react');
// require 'babel/polyfill'
var View = require('react-flexbox');
// var FlexBox = require('react-flex-component');

// var Box = FlexBox.Box;
// var Item = FlexBox.Item;

var BlockDescription = require('./blockDescription');
var Gnu = require('./gnu')
var GnuMessage = require('./gnuMessage')

var divStyle = {
	position: 'absolute',
}

module.exports = React.createClass({
	render: function () {
		return (
			<div style={divStyle} className="container">
				<Gnu />
				<div className="container flex-column">
					<GnuMessage />
					<BlockDescription />
				</div>
			</div>
		)
	}
})