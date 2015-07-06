var React = require('react')

var pStyle = {
	marginTop: '1em',
	fontWeight: '600',
	fontSize: 'large',
  textAlign: 'left',
  padding: '0.6em',
  background: 'rgba(250, 250, 250, 0.4)',
  color: '#222',
  fontFamily: 'monospace',
};

module.exports = React.createClass({
	render: function () {
		return (
			<p 
				id={this.props.id}
				className={this.props.isCollapsed} 
				style={pStyle}>
				whououo... what are you trying to do, young gnu?
			</p>
		)
	}
})