import React, { Component }  from 'react';

import ProgressBar from './progress-bar';

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0
        };
    }
    setValue = (event) => {
        this.setState({
            progress: event.target.value
        })
    }
    forceUpdate = () => {
        alert('Me updateing');
    };
    
    render() {
        return(
            <div>
                <input type="range" defaultValue={this.state.progress} min="0" max="100"
            onChange={this.setValue}/>
                <ProgressBar val={this.state.progress}></ProgressBar>
                <button onClick={forceUpdate()}>Update</button>
            </div>
        )
    }
}

export default Progress;
