import React from 'react'
import stall from "/fstalls.png"

const Banner = () => {
  return (
    <div>
      <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
        <div className='py-20 flex flex-col md:flex-row-reverse justify-between items-center gap-5'>

        {/* images */}
        <div className='md:w-1/2'>
            <img src={stall} alt=""/>
          <div className='flex flex-col md:flex-row-reverse items center justify around -mt-14 gap-6'>
            <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                <img src="/front1.png" alt="" className='rounded-2xl'/>
                <div className='space-y-1'>
                  <h5 className='text-black font-medium mb-1'>Spicy Noodle</h5>
                  <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-pink" readOnly/>
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-pink"
                    defaultChecked
                    readOnly />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-pink" readOnly/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-pink" readOnly/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-pink" readOnly/>
                </div>
              <p className='text-black text-sm'>$18.00</p>
            </div>
            </div>
            <div className='sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                <img src="/front1.png" alt="" className='rounded-2xl'/>
                <div className='space-y-1'>
                  <h5 className='text-black font-medium mb-1'>Spicy Noodle</h5>
                  <div className="rating rating-sm">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-pink" readOnly/>
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-pink"
                    defaultChecked 
                    readOnly/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-pink" readOnly/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-pink" readOnly/>
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-pink" readOnly/>
                </div>
              <p className='text-black text-sm'>$18.00</p>
            </div>
            </div>
            </div>
          </div>


          {/* texts */}
          <div className='md:w-1/2 space-y-6'>
            <h2 className='md:text-5xl text-4xl font-bond md:leading-snug leading-snug text-pink'>
              Discover the joy of flavors that turn every <span className='text-maroon'>FOOD</span> into a celebration!
            </h2>
            <p className='text-xl text-[#4A4A4A]'>Enjoy a delicious journey where every bite makes ordinary moments feel special</p>
            <button className='btn bg-maroon border-none px8 py-3 font-semibold text-white rounded-full'>Order Now</button>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Banner;
