import React from 'react'
import './ProductCart.css'
import {MdStar, MdStarHalf, MdStarBorder} from 'react-icons/md'
import {FaHeart} from 'react-icons/fa'

function ProductCart({product, handleAddToCart}) {
    const {name, stock, price, img, category, starCount} = product;
    const productName = text => {
        if(name.length > 125){
            const sliceName = text.slice(0, 125);
            return sliceName + "..."
        }else{
            return text;
        }
    };
  
  return (
    <div className='rounded-lg border border-slate-300 bg-slate-100'>
        <div className='flex p-2 rounded-lg items-center justify-center bg-white'>
        <img src={img} alt={name} />
        </div>
        <div className='p-4'>
            <div className='py-2'>
                <span className='bg-slate-200 text-gray-500 rounded-full py-1 px-3'>category {category}</span>
                <span className='bg-slate-200 text-gray-500 rounded-full py-1 px-3 ml-2'>stock {stock}</span>
            </div>
            <h3 className='mt-2 h-28'>{productName(name)}</h3>
            <h4 className='text-gray-800 text-xl font-bold mt-3'>USD ${price}</h4>
            <div className='grid grid-cols-3 mt-3'>
                <div  className='flex justify-start items-center text-orange-400'>
                <MdStar /><MdStar /><MdStar /><MdStarHalf /><MdStarBorder />
                </div>
                <div className='text-gray-500 col-span-2'>
                {starCount} reviews 
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2 mt-4'>
                <button onClick={() => handleAddToCart(product.key)} className='py-2 hover:bg-blue-700 duration-500 col-span-3 rounded-lg text-white bg-blue-500'>Add To Cart</button>
                <button className='py-2 hover:bg-blue-100 duration-500 hover:text-blue-600 bg-gray-300 rounded-lg text-gray-500 flex justify-center items-center'><FaHeart className='text-center' size={25} /></button>
            </div>
        </div>
    </div>
  )
}

export default ProductCart