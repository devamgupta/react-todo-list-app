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

    // Submit Form
    submitForm = () => {
        this.props.handleSubmit(this.state.input);
        this.setState({input: ""});
    }

    // Render
    render() {
        return (
            <div>
                <input 
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <button disabled={!this.state.input} onClick={this.submitForm}>
                    #{this.props.numItems+1} Add
                </button>
            </div>
        )
    }
}

export default Form;
