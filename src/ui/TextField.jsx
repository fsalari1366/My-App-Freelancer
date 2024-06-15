import React from 'react'

const TextField = ({label, name, register, validationSchema = {},
   type = "text", required, errors}) => {
  return (
    <div>
        <label htmlFor={name} className='mb-2 block text-secondary-700'>
          {label} {required && <span className='text-error'>*</span>}
          </label>
        <input 
        {...register(name, validationSchema)}
        type={type} 
        id={name} 
        name={name} 
        autoComplete='off'  
        className='textField__input'
        />
        {errors && errors[name] && (
          <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
        )}
    </div>
  )
}

export default TextField