import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children }) => <button type="button">PREFIX{children}</button>
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
    PropTypes.node.isRequired,
  ]).isRequired,
}

export default Button
