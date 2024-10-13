import React from 'react'

const Categories = () => {
    const categoryItems = [
        {id:1,title:"Main Dish",des:"(86 dishes)",image:"/images/home/category/cat1.png"},
        {id:2,title:"Break Fast",des:"(12 Break Fast)",image:"/images/home/category/cat2.png"},
        {id:3,title:"Dessert",des:"(48 Dessert)",image:"/images/home/category/cat3.png"},
        {id:4,title:"Browse All",des:"(255 Items)",image:"/images/home/category/cat4.png"},
    ]
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16'>
        <div className='text-center'>
            <p className='subtitle'>Customer Favorites</p>
            <h2 className='title'>Popular Categories</h2>
        </div>
        {/* categories card */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
            {
                categoryItems.map((item,i) => (
                    <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-60 mx-auto text-center cursor-pointer hover:-translate-y-4 
                    duration-300 transition-all z-10'>
                        <div className='w-full mx-auto flex items-center justify-center'>
                            <img src={item.image} alt="" className='bg-peach p-5 rounded-full w-28 h-28'/>
                        </div>
                        <div className='text-maroon mt-5 space-y-1'>
                            <h5>{item.title}</h5>
                            <p className='text-pink'>{item.des}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories;
