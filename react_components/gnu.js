var React = require('react')

var imgStyle = {
	width: '30%',
	minWidth: '12em',
	maxWidth: '15em',
	height: '100%',
	paddingTop: '4%',
	paddingLeft: '4%',
};

module.exports = React.createClass({
	render: function () {
		return (
			<img style={imgStyle} src="img/691px-Gnu_meditate_levitate.png"></img>
		)
	}
})