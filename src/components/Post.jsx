import React from 'react'

const Post = (props) => {
  return (
    <div className= ' rounded-sm flex flex-col justify-between'>
      <div className='flex flex-row justify-start'>
        <img  className='h-10 w-10' src ="https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg" />
        <span className='text-bold text-lg text-blue'>Theresa Neilson</span>
        <span className='text-lg text-gray'>Director of Marketing</span>
      </div>

    </div>
  )
}

export default Post