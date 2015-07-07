var alt = require('../alt')

class ProgressActions {
  constructor() {
    this.generateActions(
      'goToNextField'
    )
  }
}

module.exports = alt.createActions(ProgressActions)