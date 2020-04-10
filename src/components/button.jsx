import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    |UI lib|{children}
  </button>
)
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
    PropTypes.node.isRequired,
  ]).isRequired,
}

export default Button
