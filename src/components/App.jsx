import React, { Component } from 'react'
import { bankOne, bankTwo } from "../assets/data.js";
import SwitchState from "./SwitchState.jsx";
import Display from "./Display.jsx";
import Volume from "./Volume.jsx";
import DrumPad from "./DrumPad.jsx";

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            disabled:true,
            displayLabel:"Please Turn On",
            volume:"40",
            activeBank: bankOne,
        }
        this.onChangeVolume = this.onChangeVolume.bind(this);
        this.ChangeState = this.ChangeState.bind(this);
        this.ChangeBank = this.ChangeBank.bind(this);

        this.playAudioOnClick = this.playAudioOnClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.Q = React.createRef()
        this.W = React.createRef()
        this.E = React.createRef()
        this.A = React.createRef()
        this.D = React.createRef()
        this.S = React.createRef()
        this.Z = React.createRef()
        this.X = React.createRef()
        this.C = React.createRef()
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress)
    }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }

    handleKeyPress(e){
        let which = e.key.toUpperCase()
        this[which].current.playAudio(this.state.volume/100)
        this[which].current.toggleActiveState()
        this.state.activeBank.some(key => {
            if (key.keyTrigger === which) {
                this.setState({...this.state,displayLabel:key.id});
                return true;
            }
        })
    }

    onChangeVolume(e){
        this.setState({ ...this.state, volume: e.target.value, displayLabel:e.target.value})
    }

    playAudioOnClick(e){
        e.target.children[0].volume = this.state.volume/100;
        e.target.children[0].play();
        this.state.activeBank.filter(key => {
            if (key.keyTrigger === this[e.target.id].current.props.id) {
                this.setState({...this.state,displayLabel:key.id});
            }
        })
        this[e.target.id].current.toggleActiveState()
    }

    ChangeState(e){
        this.setState({
            ...this.state,
            disabled: this.state.disabled ? false:true,
            displayLabel:"__________"
        })
    }

    ChangeBank(e){
        this.setState({
            ...this.state,
            activeBank: this.state.activeBank === bankOne? bankTwo:bankOne,
            displayLabel: this.state.activeBank === bankOne? "Piano": "Hats"
        })
    }

    render() {
        const { disabled, displayLabel, volume } = this.state;

        const drum = this.state.activeBank.map(pad => {
            return (
              <DrumPad
                id={pad.keyTrigger}
                ref={this[pad.keyTrigger]}
                key={pad.keyCode}
                keyTrigger={pad.keyTrigger}
                url={pad.url}
                clicked={this.playAudioOnClick}
              />
            )
        })
        
        return (
            <div id="main">
                <div id="options">
                    <div id="options-switch">
                        <div>
                            <SwitchState disabled={disabled} label="Bank" onClick={this.ChangeBank} />
                        </div>
                        <div>
                            <SwitchState disabled={false} label="Power" onClick={this.ChangeState}  />
                        </div>
                    </div>
                    <div>
                        <Display displayLabel={displayLabel} volume={volume} />
                        <Volume volume={volume}  disabled={disabled} onChange={this.onChangeVolume}/>
                    </div>
                </div>
                <div id="keyboard">{drum}</div>

            </div>
        )
    }
}
