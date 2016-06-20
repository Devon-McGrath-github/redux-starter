import React from 'react'

export default React.createClass({
  render () {
    return (
      <div className="thing-list">
        <h2>List</h2>
        <ul>
        {this.props.things.map((thing) => {
          return <li>{thing.name}</li>
        })}
        </ul>
      </div>
    )
  }
})
