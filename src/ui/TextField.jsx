import React from 'react'

const TextField = ({label, name, value, onChange}) => {
  return (
    <div>
        <label htmlFor={name} className='mb-2 block'>{label}</label>
        <input type='text' id={name} value={value} onChange={onChange}
          name={name} autoComplete='off'  className='textField__input'
        />
    </div>
  )
}

export default TextField