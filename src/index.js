import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

// Component
import PrimeraApp from './PrimeraApp'

const divRoot = document.querySelector('#root')

ReactDOM.render(<PrimeraApp greetings="Hello Alex" />, divRoot)
