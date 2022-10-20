import React from 'react';


class ControlledForm extends React.Component {
    
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState(this.state)
        event.target.reset()
        this.setState({
            name: '',
            email: '',
            password: ''
        })
    }

    render() {
        
        const { name, email, password } = this.state

        return(
            <div style={{padding: '15px', margin:'15px', border: '1px solid black'}}>
                <h1>Controlled form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    placeholder="Name"
                    className="form-control"
                />

                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    placeholder="Email"
                    className="form-control"
                />

                    <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password" className="form-control"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ControlledForm;

