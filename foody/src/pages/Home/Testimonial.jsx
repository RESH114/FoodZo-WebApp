import React from 'react'
import pic from '/chef_enhanced.png'
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <div>
      <div className='section-container'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
            <div className='md:w-1/2'>
            <img src={pic} alt=""/>
            </div>
            <div className='md:w-1/2'>
                <div className='text-left md:w-4/5'>
                    <p className='subtitle'> Testimonial</p>
                    <h2 className='title'> What Our Customer Say About Us</h2>
                    <blockquote className='my-5 text-pink leading-[40px]'>
                        "I had the pleasure of dining at Foodie last night, and I'm still raving about the experience! The attention to detail 
                        in presentation and service is impeccable"
                    </blockquote>
                    {/* avatar  */}
                    <div className='flex items-center gap-4 flex-wrap'>
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        <div className="avatar border-none">
                            <div className="w-12">
                            <img src="/images/testimonal/testimonial1.png" />
                            </div>
                        </div>
                        <div className="avatar border-none">
                            <div className="w-12">
                            <img src="/images/testimonal/testimonial2.png" />
                            </div>
                        </div>
                        <div className="avatar border-none">
                            <div className="w-12">
                            <img src="/images/testimonal/testimonial3.png" />
                            </div>
                        </div>
                        <div className="avatar placeholder border-none">
                            <div className="bg-pink text-neutral-content w-12 ">
                            <span className='text-white'>+99</span>
                            </div>
                        </div>
                        </div> 
                        <div className='space-y-1'>
                            <h5 className='text-maroon text-lg font-semibold'>Customer Feedback</h5>
                            <div className='flex items-center gap-2'>
                                <FaStar className="text-maroon"/>
                                <span className='text-pink font-medium'>4.9</span><span className='text-pink'>(18.6k Reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
