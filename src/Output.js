import React from 'react';
import './App.css';

class Output extends React.Component {
    render() {
        return (
            <div>
                {this.props.currentValue}
            </div>
        )
    }
}

export default Output;