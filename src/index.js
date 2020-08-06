import React, { Component } from 'react';
import { render } from "react-dom";
import App from "./components/App.jsx"
import "./css/styles.scss";

export default class Wrapper extends Component {
    render() {
        return (
            <App />
        )
    }
}

render(<Wrapper />, document.getElementById("drum-machine"));
