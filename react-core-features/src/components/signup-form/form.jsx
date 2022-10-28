import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './text-input';
 

const Form = ({values, agreement, handleAgreement, handleChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
           
            <TextInput
                type="text"
                name="name"
                label="Name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
            />
            
            <TextInput
                type="email"
                name="email"
                label="email"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
            />
               

            <TextInput
                type="password"
                name="password"
                label="password"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
            />
               
          <div className="form-check">
                <input type="radio" name="gender" value="Male" onChange={handleChange}/>
                <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
                <input type="radio" name="gender" value="Female" onChange={handleChange}/>
                <label className="form-check-label">Female</label>
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
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form;