import React from 'react'
import './sucess.css'
export default function Sucess() {
  return (
    <>
    <section className='sucess'>
       <div className="container">
       <div className='title text-center'>
        <h2 className='text-3xl font-bold'>Our Success</h2>
        <p className='text-lg text-center py-3 leading-7 my-4'>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec<br/> nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
        </div>
        <div className='content flex flex-col lg:flex-row gap-36 text-center my-14 mx-auto justify-center'>
        <div className='item flex flex-col gap-2'>
            <span className=' text-3xl'>15K+</span>
            <span className='text-lg '>students</span>
        </div>
        <div className='item  flex flex-col gap-2'>
            <span className=' text-3xl'>75%</span>
            <span className='text-lg '>Total success</span>
        </div>
        <div className='item  flex flex-col gap-2'>
            <span  className=' text-3xl'>35</span>
            <span className='text-lg '>main questions</span>
        </div>
        <div className='item  flex flex-col gap-2'>
            <span  className=' text-3xl'>26</span>
            <span className='text-lg '>chief exports</span>
        </div>
        <div className='item  flex flex-col gap-2'>
            <span className=' text-3xl'>16</span>
            <span className='text-lg '>years of experience</span>
        </div>
       </div>
       </div>
    </section>
    </>
  )
}
