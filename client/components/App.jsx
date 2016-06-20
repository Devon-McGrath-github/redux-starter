import React from 'react'

import ThingList from './ThingList'

export default React.createClass({
  render () {
    const state = this.props.store.getState()
    return (
      <div>
        <h1>Things</h1>
        <ThingList things={state.things}/>
      </div>
    )
  }
})
