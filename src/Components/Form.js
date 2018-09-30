import React from 'react';

const Form = props => (
    <form className="form-inline" onSubmit={props.getInput}>
        <div className="form-group">
            <input type="text" className="form-control" name="keyword" placeholder="Image keyword" />
            <button className="btn btn-primary">Search</button>
        </div>
    </form>
);

export default Form;