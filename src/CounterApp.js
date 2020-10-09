import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  // handleAdd
  const handleAdd = (e) => {
    value += 1
    console.log(value)
  }

  return (
    <>
      <h1>
        <span role="img" aria-label="emoji">
          ✌🏻{' '}
        </span>
        CounterApp
      </h1>
      <h2>{value}</h2>

      <button onClick={handleAdd}>+1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp
