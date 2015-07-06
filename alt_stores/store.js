var alt = require('../alt');
var merge = require('object-assign');

var Actions = require('../actions/actions');

var store = alt.createStore(class Store {
	constructor() {
		this.bindActions(Actions)
		this.message = ''
		this.messages = [
			'hmmm, interesting',
			'is that specific enough?',
			'ah.. tell me more!',
			'interesting problem...',
			''
		]
	}

	gnuMessage = 

})