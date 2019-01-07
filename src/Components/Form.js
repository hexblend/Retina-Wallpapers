import React from 'react';
import { Link } from 'react-router-dom';

class Form extends React.Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    render(){
        return (
            <form className="Form-Component">
                <input 
                type="text" 
                value={this.state.value} 
                onChange={this.handleChange} 
                name="keyword" 
                placeholder="Search images..." 
                autoComplete="off"
                />

                <Link to={`/Retina-Wallpapers/search/${this.state.value}`}>
                    <button onClick={this.props.onSubmit} style={{display: 'none'}}>    
                        Search Button
                    </button>
                </Link>      
            </form>
        );
    }
};

export default Form;