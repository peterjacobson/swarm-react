var React = require('react')

var pStyle = {
	position: 'relative',
	marginTop: '-28%',
	fontWeight: '600',
	width: '43%',
  left: '9%',
  textAlign: 'right',
  padding: '0 .4em',
  color: '#222',
  fontFamily: 'monospace',
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