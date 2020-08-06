import React from 'react'
import PropTypes from 'prop-types'

function Volume(props) {
    return (
        <div className="slidecontainer">
            <input 
                type="range" 
                disabled={props.disabled} 
                onChange={props.onChange}
                min="1" 
                max="100" 
                value={props.volume} 
                className="sliderVolume" 
                id="volumeSlide" 
            />
        </div>
    )
}

Volume.propTypes = {
    volume:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    disabled:PropTypes.bool.isRequired
}

export default Volume

