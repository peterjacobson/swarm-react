var React = require('react')


module.exports = React.createClass({
	render: function () {
		var imgStyle = {
			marginTop: this.props.topMargin + 'em',
			width: '30%',
			minWidth: '12em',
			maxWidth: '15em',
			height: '100%',
			paddingLeft: '2%',
			paddingRight: '2%',
		};
		return (
			<img style={imgStyle} src="img/691px-Gnu_meditate_levitate.png" 
				alt="a meditating flute playing gnu in a yellow robe, floating over snowy alps"></img>
		)
	}
})