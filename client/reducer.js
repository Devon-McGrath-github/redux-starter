const INITIAL_STATE = {
  things: [{
    id: 1,
    name: 'red thing'
  }]
}

export default (state = INITIAL_STATE , action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case 'ADD_THING':
      newState.things.push({
        id: state.things.length + 1,
        name: action.name
      })
  }
  return newState
}
