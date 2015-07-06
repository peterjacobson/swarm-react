var React = require('react')

module.exports = React.createClass({
	render: function() {
		return (
			<li id={this.props.id}>
				<button style={{width: '100%'}}>
					{this.props.task}
				</button>
			</li>
		)
	}
})