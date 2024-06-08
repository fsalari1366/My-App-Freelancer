import React from 'react'
import useUser from '../features/authentication/useUser'

const Header = () => {
  const { data } = useUser();
  console.log(data);
  return (
    <div className='bg-secondary-0 py-4 px-8'>app header</div>
  )
}

export default Header