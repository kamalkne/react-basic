import React, { Component }  from 'react';


class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <input type="range" value={this.props.val} min="0" max="100"/>
            </div>
        )
    }
}

export default ProgressBar;
