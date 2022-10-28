import React from 'react';
import PropTypes from 'prop-types';

// functional component
const TextInput = props => (
    <div className="form-group">
        <label>{props.label}</label>
        <input 
            type={props.type}
            className={props.error ? "form-control is-invalid": "form-control"}
            id={props.name}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
        {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
)

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}

export default TextInput;