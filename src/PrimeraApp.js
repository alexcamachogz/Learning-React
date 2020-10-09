import React from 'react'
import PropTypes from 'prop-types'

// Functional Component
const PrimeraApp = ({ greetings, subtitle }) => {
  return (
    <>
      <h1>
        <span role="img" aria-label="emoji">
          🚀{' '}
        </span>
        {greetings}
      </h1>
      <p>{subtitle}</p>
    </>
  )
}

PrimeraApp.propTypes = {
  greetings: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitle: "I'm a subtitle"
}

export default PrimeraApp
