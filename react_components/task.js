var React = require('react')

module.exports = React.createClass({
	render: function() {
		return (
			<li id={this.props.id}>
				<button 
					className={this.state.done ? 'done' : ''}
					onClick={this._onClick}>
					{this.props.task}
				</button>
			</li>
		)
	},
	getInitialState: function() {
		return {
			done: false,
		}
	},
	_onClick: function(e) {
		// this.props.processProgress.checklistCompleted[]
		this.setState( { done: !this.state.done } )
	}

})