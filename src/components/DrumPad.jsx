import React from 'react'
import PropTypes from 'prop-types'

class DrumPad extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
          active: false,
        }
        this.audio = React.createRef()

        this.toggleActiveState = this.toggleActiveState.bind(this);
        this.playAudio = this.playAudio.bind(this);
    }
    
    playAudio(volume){
        this.audio.current.volume= volume;
        this.audio.current.play()
    }
      
    toggleActiveState(){
        this.setState({
          active: !this.state.active,
        })
    }

    render() {
        return (
          <div
            className="drum-pad"
            style={
              this.state.active
                ? {background: 'black', color: 'white'}
                : {backgroung: 'white', color: 'black'}
            }
            ref={this.ref}
            id={this.props.id}
            onClick={this.props.clicked}>
                <audio
                ref={this.audio}
                src={this.props.url}
                onEnded={this.toggleActiveState}
                className="clip"
                id={this.props.id}
                />
                {this.props.keyTrigger}
          </div>
        )
    }
}

DrumPad.propTypes = {
    url:PropTypes.string.isRequired,
    keyTrigger: PropTypes.string.isRequired

}

export default DrumPad

