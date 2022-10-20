import React from 'react';


class UnControlledForm extends React.Component {
    state = {

    }

    handleSubmit = event => {
        event.preventDefault();
        console.dir(event.target)
        
        const data = {}
        data.name = event.target.name.value
        data.email = event.target.email.value
        data.password = event.target.password.value
        console.log('-' * 30, 'form data', data)
        event.target.reset()
    }

    render() {
        return(
            <div style={{padding: '15px', margin:'15px', border: '1px solid black'}}>
                <h1>Un controlled form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Name" className="form-control"/>
                    <input type="email" name="email" placeholder="Email" className="form-control"/>
                    <input type="password" name="password" placeholder="Password" className="form-control"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default UnControlledForm;

