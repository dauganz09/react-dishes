import React from 'react'
import Info from './Info'
import Review from './Review'

const Card = ({hasLeftSlide=false,hasRightSlide=false,img,avatar,review,info}) => {
  return (
    <div className='flex flex-col h-[220px]'>
    <div className='relative w-[296px] h-[152px] bg-gray-50 rounded-2xl flex items-center justify-center'>
              <div className='w-[120px] h-[120px] rounded-full'>
                  <img className='object-cover' src={img} alt="" />
              </div>
        {
            hasRightSlide && <div className='w-[26px] h-[26px] absolute right-4 rounded-full shadow-chev flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        }

        {
            hasLeftSlide && <div className='w-[26px] h-[26px] absolute right-4 rounded-full shadow-chev flex items-center justify-center'>
           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
          </div>
        }
              

            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-[#E1E1E1] absolute left-6 bottom-[2px] h-10 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg> 

              <img src={avatar} className='w-[56px] h-[56px] rounded-full absolute right-4 bottom-[-28px]' alt="" />
              
             
    </div>
           {review && <Review review={review.value} count={review.count} name={review.name}/> } 
           {info && <Info name={info.name} price={info.price}/>}
    </div>
  )
}

export default Card