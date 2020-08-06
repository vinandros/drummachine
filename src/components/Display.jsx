import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

function Display(props) {
    return (
       <div id="display">
           <p id="volume-label">volume: {props.volume}</p>
           <p id="display-label">{props.displayLabel}</p>
       </div>
    )
}

Display.propTypes = {
    displayLabel: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired
}

export default Display

