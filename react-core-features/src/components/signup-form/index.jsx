import React from   'react';
import './index.css';
import Form from './form';

const initValues = {
        name: '',
        email: '',
        password: '',
        birthDate: '',
        gender: ''
    }

class SignupForm extends React.Component {
    state = {
        values: initValues,
        agreement: false,
        errors: {},
    }

    handleChange = event => {
        this.setState(
            {
                values: {
                    ... this.state.values, // old values
                    [event.target.name]: event.target.value
                }
            }
        )
    }

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const {isValid, errors } = this.validate()
        
        if(isValid) {
            console.log(this.state.values);
            event.target.reset();
            this.setState({values: initValues, agreement: false})
        } else {
            this.setState({errors})
        }
    }

    validate = () => {
        const errors = {}
        const {values: {name, email, password, gender}} = this.state

        if(!name) {
            errors.name = "Name is required";
        } else if(name.length > 30) {
            errors.name = "Name must be between 5 to 30 characters";
        }

        if(!email) {
            errors.email = "Email is required";
        }
        if(!password) {
            errors.password = "Password is required";
        }

        if(!gender) {
            errors.gender = "Email is required";
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }

    render() {
        return (
            <div>
                <h1>Signup form</h1>
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    handleChange={this.handleChange}
                    handleAgreement={this.handleAgreement}
                    handleSubmit={this.handleSubmit}
                    errors={this.state.errors}
                />
            </div>
        )
    }
}

export default SignupForm;