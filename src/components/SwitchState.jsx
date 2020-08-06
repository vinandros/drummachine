import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

function SwitchState(props) {
    return (
        <Fragment>
            <p className="label">{props.label}</p>
            <label className="switch">
                <input type="checkbox" disabled={props.disabled} onClick={props.onClick} />
                <span className="slider round"></span>
            </label>
        </Fragment>
    )
}

SwitchState.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default SwitchState


