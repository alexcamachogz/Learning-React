import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(0)

  // handleAdd
  const handleAdd = (e) => {
    setCounter(counter + 1)
    // setCounter((c) => c + 2)
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
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp
