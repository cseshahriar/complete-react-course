import React from 'react';

const Form = () => {
    return(
        <form>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" name="username"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name="password"/>
            </div>
        </form>
    )
}

export default Form;

