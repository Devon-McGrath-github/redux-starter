import React from 'react'

export default React.createClass({
  render () {
    const things = this.props.things
    return (
      <div className="thing-list">
        <h2>List</h2>
        <ul>
          {things.map((thing) => {
            return <li key={thing.id}>{thing.name}</li>
          })}
        </ul>
      </div>
    )
  }
})
