import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './text-input';

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

export default Form;