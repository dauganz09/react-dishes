import React from 'react'
import Card from './Card'

const Slider = ({title,data}) => {

  console.log(data);

  return (
    <div className='flex flex-col w-full  mb-6'>
        <div className='w-full  h-[50px] flex items-center justify-between  py-10 '>
          <h1 className='text-3xl font-semibold'>{title}</h1>

          <div className='w-[200px] flex  items-center justify-evenly '>
              <div className='w-[80px] h-[38px] rounded-full flex items-center justify-center bg-[#F5F5F5]'>
                  See all
              </div>
              <div className='w-[38px] h-[38px] bg-[#F5F5F5] rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-slate-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              </div>
              <div className='w-[38px] h-[38px] bg-[#F5F5F5] rounded-full flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              </div>
          </div>
        </div>

        <div className='w-full  flex items-center justify-between '>
              {/* <Card img='./assets/images/Pizza.png' avatar='./assets/images/Chef.png' hasReview={true}  hasRightSlide={true}/>
              <Card img='./assets/images/Pasta.png' avatar='./assets/images/Chef2.png'hasReview={true}/>
              <Card img='./assets/images/PIne.png' avatar='./assets/images/Chef3.png' hasReview={true}/>
              <Card img='./assets/images/Matcha.png' avatar='./assets/images/Chef4.png' hasInfo={true}/> */}
          {
            data.map((item,index)=>
              <Card key={index} img={item.img} avatar={item.avatar} hasRightSlide={item.hasRight} hasLeftSlide={item.hasLeft} review={item.review} info={item.info}/>
            )
          }

           
        </div>

    </div>
  )
}

export default Slider