import React from 'react';

import './form.scss';

const Form = ({label, ...otherParams}) => {
    return (
        <div className='form-field'>
            <input {...otherParams} className='form-field-input' />
            <label className='form-field-label'>{label}</label>
        </div>
    )
};

export default Form;
