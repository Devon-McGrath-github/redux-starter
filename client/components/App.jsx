import React from 'react'

import ThingList from './ThingList'
import { addThing } from '../actions'

export default React.createClass({
  componentWillMount() {
    this.props.store.subscribe(this.updateList)
  },

  render () {
    const things = this.props.store.getState().things
    return (
      <div>
        <h1>Things</h1>
        <ThingList things={things} />
        <a href="#" onClick={this.addNewThing}>Add thing</a>
      </div>
    )
  },

  updateList () {
    this.setState({})
  },

  addNewThing () {
    const action = addThing('blue thing')
    this.props.store.dispatch(action)
  }
})
