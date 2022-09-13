import React from 'react'
import PropTypes from 'prop-types'
import Bug from './Bug'

const Bugs = ({ bugs }) => {
  return (
    <div className='d-flex align-items-center justify-content-center'>{bugs && bugs.map((bug) => <Bug key={bug.id} bug={bug} />)}</div>
  )
}

Bugs.propTypes = {
  bugs: PropTypes.array
}

export default Bugs
