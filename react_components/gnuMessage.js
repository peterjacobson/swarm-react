var React = require('react')

var pStyle = {
	marginTop: '1em',
  textAlign: 'left',
  padding: '0.6em',
  background: 'rgba(250, 250, 250, 0.6)',
  color: '#222',
};

module.exports = React.createClass({
	render: function () {
		return (
			<p 
				id={this.props.id}
				className={this.props.isCollapsed} 
				style={pStyle}>
				{this.props.message}
			</p>
		)
	}
})