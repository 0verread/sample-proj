import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between h-10 w-full'>
      <div className=''>
          <img className=" h-10 w-10" src="https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg" />
      </div>
      <div className=' border-black'>
        <input className='font-lg w' value="" placeholder='Search for people, jobs, companies and more..'/>
      </div>
      <div className=''>
        <img className='h-10 w-10' src="https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg"/>
      </div>
    </div>
  )
}

export default Header