var React = require('react');
// require 'babel/polyfill'
var View = require('react-flexbox');
// var FlexBox = require('react-flex-component');

// var Box = FlexBox.Box;
// var Item = FlexBox.Item;
var Gnu = require('./gnu')
var Form = require('./form')

var divStyle = {
	position: 'absolute',
}

module.exports = React.createClass({
	render: function () {
		return (
			<div style={divStyle} className="container">
				<Gnu />
				<Form />
			</div>
		)
	}
})