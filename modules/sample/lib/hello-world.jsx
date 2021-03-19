import React from 'react'
import { join } from 'ramda'

export default function HelloWorld () {
  return <div>{join(' ', [ 'Hello', 'World' ])}</div>
}
