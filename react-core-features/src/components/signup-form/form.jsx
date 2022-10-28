import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './text-input';
 

const Form = ({values, agreement, errors, handleAgreement, handleChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} method="post">
           
            <TextInput
                type="text"
                name="name"
                label="Name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
            />
            
            <TextInput
                type="email"
                name="email"
                label="email"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
            />
               

            <TextInput
                type="password"
                name="password"
                label="password"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                error={errors.password}
            />
               
          <div className="form-check">
                <label className="form-check-label">Male</label>
                <input type="radio" name="gender" value="Male" onChange={handleChange}/>
                <label className="form-check-label">Female</label>
                <input type="radio" name="gender" value="Female" onChange={handleChange}/>
                {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}

          </div>

          <div className='form-check'>
                <input 
                type="checkbox"
                name="agreement"
                checked={agreement}
                onChange={handleAgreement}
                />
                <label className="form-check-label">I agree</label>
          </div>

          <div className='form-group'>
            <button 
                type="submit"
                className='btn btn-primary'
                disabled={!agreement}
            >Submit</button>
          </div>

        </form>
    )
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form;