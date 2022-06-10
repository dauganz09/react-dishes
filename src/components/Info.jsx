import React from 'react'

const Info = ({name,price}) => {
  return (
    <div className='w-[150px] h-[60px] mt-10 flex flex-col'>
              
                <span className='text-base font-bold'>{name}</span>
                <span className='text-base font-normal text-[#E1E1E1]'>${price}</span>

            </div>
  )
}

export default Info