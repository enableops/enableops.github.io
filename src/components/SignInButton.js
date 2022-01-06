import React, { useState } from 'react';

import Button from '@mui/material/Button';
import '@fontsource/roboto/500.css';

export default class SignInButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date().toLocaleTimeString() };
        console.log(this.state);
    }
    
    render() {
        return (
                <Button onClick={this.buttonPressed} variant="contained" disableElevation > It's {this.state.date}</Button>
        );
    }

    buttonPressed() {
        console.log("pressed")
    }

    updateState() {
        this.setState({ date: new Date().toLocaleTimeString() });
    }

    componentDidMount() {
        this.interval = setInterval(this.updateState.bind(this), 1000);
    }
}
