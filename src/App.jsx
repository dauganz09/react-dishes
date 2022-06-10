import { useState } from 'react'
import Slider from './components/Slider'
import dishes from './mock/data1.json'
import dishes2 from './mock/dishes.json'

function App() {
  return <>
      <div className='lg:container lg:mx-auto h-screen flex flex-col  py-10 px-20'>

          <div className='w-[170px]  h-[40px] rounded-full bg-[#F5F5F5] flex items-center justify-between px-4 mb-6'>
          <svg className='stroke-slate-400 w-5 h-5' xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className='text-lg font-medium'>Delivery Day</span> 
           </div>

           <Slider title='American' data={dishes}/>
            <hr className='w-full border-[#F5F5F5] bg-[#F5F5F5] border-2 h-[2px]'/>
          <Slider title="Popular Dishes" data={dishes2} /> 
      </div>
  </>
  
}

export default App
