import React from 'react';
import PropTypes from 'prop-types';

// functional component
const TextInput = props => (
    <div className="form-group">
        <label>{props.label}</label>
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

export default TextInput;