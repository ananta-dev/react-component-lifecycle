import React, { Component } from 'react';

export class MyComponent extends Component {
    state = {
        counter: 0,
        isLoaded: false,
        data: '',
    };

    static getDerivedStateFromProps(props, state) {
        console.log('>>> getDerivedStateFromProps');
        // console.log({ props, state });
        return null;
    }

    componentDidMount() {
        console.log('>>> componentDidMount');
        setTimeout(() => {
            this.setState({ isLoaded: true, data: 'cool data' });
        }, 1500);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('>>> shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('>>> getSnapshotBeforeUpdate');
        return { message: 'Hey there, componentDidUpdate! ' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> componentDidUpdate');
        console.log('received the following snapshot');
        console.log({ snapshot });
    }

    componentWillUnmount() {
        console.log('>>> componentWillUnmount');
    }

    render() {
        console.log('>>> render()');

        // console.log('this.state:');
        // console.log(this.state);
        return (
            <div>
                <h1>MyComponent</h1>
                {this.state.isLoaded ? (
                    <h2>Data: {this.state.data}</h2>
                ) : (
                    <h2>Fetching data</h2>
                )}
                <h2>{this.state.counter}</h2>
                <button
                    onClick={() => {
                        console.log('incrementing');
                        this.setState({ counter: this.state.counter + 1 });
                    }}
                >
                    Increment
                </button>
                <button
                    onClick={() => {
                        console.log('decrementing');
                        this.setState({ counter: this.state.counter - 1 });
                    }}
                >
                    Decrement
                </button>
            </div>
        );
    }
}

export default MyComponent;
