import React from 'react';
import { Link } from 'react-router-dom';

class Form extends React.Component {
    render(){
        return (
            <form className="form-inline" onSubmit={this.props.getInput}>
                <div className="form-group">
                    <input type="text" className="form-control" name="keyword" placeholder="Image keyword" />

                    <Link to={'/search/' + this.props.searched}>
                        <button className="btn btn-primary">Search</button>
                    </Link>

                </div>
            </form>       
        );
    }
};

export default Form;