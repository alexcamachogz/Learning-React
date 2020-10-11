import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

// Component
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp'

const divRoot = document.querySelector('#root')

ReactDOM.render(<CounterApp value={0} />, divRoot)
