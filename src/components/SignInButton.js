import React from 'react';

export class SignInButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date().toLocaleTimeString() };
        console.log(this.state);
    }
    
    render() {
        return <div>It's {this.state.date}</div>;
    }

    updateState() {
        this.setState({ date: new Date().toLocaleTimeString() });
    }

    componentDidMount() {
        this.interval = setInterval(this.updateState.bind(this), 1000);
    }
}
