import React from 'react'

const RadioInput = ({name, label, value, onChange, id, checked}) => {
  return (
    <div className='flex items-center text-secondary-600 gap-x-2'>
                <input className='cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900' type='radio' name={name} id={id} value={value} onChange={onChange}
                checked={checked}
                 />
                <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioInput