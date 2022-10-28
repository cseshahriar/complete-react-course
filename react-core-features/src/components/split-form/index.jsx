import React from 'react';
import Form from './form';

class SplitForm extends React.Component {
    
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
        console.log('form submit ', this.state)
        event.target.reset()
        this.setState({
            name: '',
            email: '',
            password: ''
        })
    }

    validate = () => {
        const errors = {}
        const {values: {name, email, password, gender}} = this.state

        if(this.state.name) {

        }
    }

    render() {
        
        const { name, email, password } = this.state

        return(
            <div style={{padding: '15px', margin:'15px', border: '1px solid black'}}>
                <h1>DRY Controlled form</h1>
                <Form
                    values={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default SplitForm;

