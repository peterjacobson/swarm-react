var React = require('react')

var pStyle = {
	position: 'relative',
	marginTop: '-28%',
	fontWeight: '600',
	width: '43%',
  left: '46%',
  textAlign: 'left',
  padding: '0 .4em',
  color: '#222',
  fontFamily: 'monospace',
};

module.exports = React.createClass({
	render: function () {
		return (
			<p style={pStyle}>
				whououo... what are you trying to do, young gnu?
			</p>
		)
	}
})