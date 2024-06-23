import React from 'react'

const RadioInput = ({name, label, value, register, id, checked, validationSchema = {}, errors, watch}) => {
  return (
    <div className='flex items-center text-secondary-600 gap-x-2'>
                <input className='cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-primary-900' type='radio' name={name} id={id} value={value} 
                {...register(name, validationSchema)}
                checked={watch(name) === value}
                 />
                <label htmlFor={id}>{label}</label>
                {/* {errors && errors[name] && (
          <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
        )} */}
    </div>
  )
}

export default RadioInput