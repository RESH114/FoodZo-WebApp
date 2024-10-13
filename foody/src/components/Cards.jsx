import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {FaHeart} from "react-icons/fa"
const Cards = ({item}) => {
  const [isHeartFilled,setIsHeartFilled] = useState(false);
  const handleHeartClick = () =>{
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div>
      <div className="card card-compact bg-white w-80 shadow-xl relative ">

    <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-peach ${
          isHeartFilled ? "text-maroon" : "text-white"
        }`}
        onClick={handleHeartClick}
        >
      <FaHeart className='w-5 h-5 cursor-pointer'/>
    </div>
    <Link to={`/menu/${item._id}`}>
    <figure>
        <img
        src={item.image}
        alt="" 
        className='hover:scale-105 transition-all duration-200 md:h-72'
        />
    </figure>
    </Link>
    <div className="card-body">
      <Link to={`/menu/${item._id}`}><h2 className="card-title text-maroon">{item.name}!</h2></Link>
        <p className='text-peach'>Description of the item</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className='font-semibold text-pink text-sm'><span className='text-maroon'>$</span>{item.price}</h5>
        <button className="btn bg-pink border-none text-white">Buy Now</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Cards
