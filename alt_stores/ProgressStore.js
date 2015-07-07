var alt = require('../alt');
var merge = require('object-assign');

var ProgressActions = require('../alt_actions/ProgressActions');

module.exports = alt.createStore(class Store {
	constructor() {
		this.progress = {
			gnuProgress: -1,
			gnuMessages: [0, 0, 0],
			focus: {
				section: 'checklist',
				item: 0
			},
			processProgress: {
				checklistCompleted: [
					false, false, false, false, false, false, false
				],
				form: {
					revealed: [
						true, false, false
					]
				}
			}
		}
		this.bindActions(ProgressActions)
		this.bindListeners({
			handleGoToNextField: ProgressActions.GO_TO_NEXT_FIELD
		})
	}

	handleGoToNextField(nextField) {
		this.nextField = nextField
	}

})
