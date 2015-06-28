var React = require('react')

var pStyle = {
	position: 'relative',
	marginTop: '-28%',
	fontWeight: '600',
	width: '29%',
  left: '23%',
  textAlign: 'right',
  padding: '0 .4em',
};

module.exports = React.createClass({
	render: function () {
		return (
			<p style={pStyle}>
				whououo... tell me your troubles...
			</p>
		)
	}
})