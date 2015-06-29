var React = require('react')

var pStyle = {
	marginTop: '5em',
	fontWeight: '600',
	width: '20em',
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