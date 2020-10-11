import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value)

  // handleAdd
  const handleAdd = (e) => {
    setCounter(counter + 1)
    // setCounter((c) => c + 2)
  }

  // handleSubstract
  const handleSubstract = (e) => {
    setCounter(counter - 1)
  }

  // handleReset
  const handleReset = (e) => {
    setCounter(value)
  }

  return (
    <>
      <h1>
        <span role="img" aria-label="emoji">
          ✌🏻{' '}
        </span>
        CounterApp
      </h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp
