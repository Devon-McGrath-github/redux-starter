import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'

import App from './components/App'
import reducer from './reducer'

// Without using the Redux dev tools
// let store = createStore(reducer)

// To use the Redux dev tools
let store = createStore(
  reducer, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <App store={store} />,
    document.getElementById('app')
  )
})
