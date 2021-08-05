import React, { Component } from 'react';

class Form extends Component {
    state = {
        input: "",
    };

    // Handle typing
    handleChange = e => {
        this.setState({
            input: e.target.value,
        });
    }

    // Render
    render() {
        return (
            <div>
                <input 
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <button disabled={!this.state.input} >
                    Add
                </button>
            </div>
        )
    }
}

export default Form;
