import React from 'react'
import ReactDOM from 'react-dom'

import HelloWorld from './hello-world.jsx'

window.onload = function () {
  ReactDOM.render(<HelloWorld />, document.getElementById('main'))
}
