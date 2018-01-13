import React, { Component } from 'react';
import List from './list';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    };

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.term} onChange={this.onChange}/>
                    <button>Submit</button>
                </form>
                <List items={this.state.items}></List>
            </div>
        );
    }
}

export default Todo;
