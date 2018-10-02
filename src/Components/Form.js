import React from 'react';
import { Link } from 'react-router-dom';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <form className="form-inline" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" name="keyword" placeholder="Image keyword" />

                    <Link to={`/search/${this.state.value}`}>
                        <button className="btn btn-primary">Search</button>
                    </Link>
                </div>
            </form>
        );
    }
};

export default Form;