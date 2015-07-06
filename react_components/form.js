var React = require('react')

var GnuMessage = require('./gnuMessage');
var BlockDescription = require('./blockDescription');
var ToDoList = require('./toDoList')

var divStyle = {
	width: '23em'
}

module.exports = React.createClass({
	getInitialState: function() {
		return {

		}
	},
	render: function() {
		return (
			<div 
				className="container flex-column"
				style={divStyle}>
				<ToDoList />
				<GnuMessage
					id={"aim-help"} isCollapsed={''} />
				<BlockDescription 
					id={"aim"} isCollapsed={''} next={"context"} />
				<GnuMessage 
					id={"context-help"} isCollapsed={'collapsed'} />
				<BlockDescription 
					id={"context"} isCollapsed={'collapsed'} next={"issue"} />
				<GnuMessage 
					id={"issue-help"} isCollapsed={'collapsed'} />
				<BlockDescription 
					id={"issue"} isCollapsed={'collapsed'} next={false} />
			</div>
		)
	}
})