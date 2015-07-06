var alt = require('../alt')

class TodoActions {
  constructor() {
    this.generateActions(
      'gnuMessage',
    )
  }
}

module.exports = alt.createActions(TodoActions)