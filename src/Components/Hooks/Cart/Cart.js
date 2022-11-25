import React from 'react'
import { HiShoppingCart, HiTrash} from 'react-icons/hi'

function Cart({product}) {
  const priceReduce = (item) => {
    const items = item.reduce;
  }
  return (
    <div className='bg-slate-100 p-8 rounded-lg'>
    <h1 className='text-center font-bold'>Order Summary</h1>    
    <div className='text-lg mt-8 leading-10 font-medium text-gray-600'>
    <h5 className='border-b mt-2  flex items-center justify-between'>Product Quantity : <span>{product.length}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>Total Price : <span>{0}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>Tax : <span>{0}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>Total Shipping Charge : <span>{0}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>Grand Total : <span>{0}</span></h5>  
    </div>  
    <div className='mt-8 flex flex-col'>
     <button className='font-medium text-xl flex gap-2  justify-center text-white bg-blue-600 hover:bg-blue-800 duration-500 py-2 rounded-lg mb-4 items-center'>Clear Cart <HiTrash /></button>
     <button className='font-medium text-xl flex gap-2  justify-center text-white bg-blue-600 hover:bg-blue-800 duration-500 py-2 rounded-lg items-center'>Review Order <HiShoppingCart /></button>
    </div>    
    </div>
  )
}

export default Cart