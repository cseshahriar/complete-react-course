import React from 'react';
import PropTypes from 'prop-types';

// functional component
const TextInput = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
            type={props.type}
            className="form-control"
            id={props.name}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    </div>
)
TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}

const Form = props => (
    <form onSubmit={props.handleSubmit}>
        <TextInput
            name="name"
            label="name"
            placeholder="Name"
            value={props.values.name}
            onChange={props.handleChange}
        />
        <TextInput
            name="email"
            label="email"
            placeholder="email"
            value={props.values.email}
            onChange={props.handleChange}
        />
            <TextInput
            name="password"
            label="password"
            placeholder="password"
            value={props.values.password}
            onChange={props.handleChange}
        />

        <button type="submit">Submit</button>
    </form>
)
Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

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

