import React from 'react'
import { HiShoppingCart, HiTrash} from 'react-icons/hi'
import {removeDataBase} from '../../../utilities/dataBase'
function Cart({cart}){
  let total = 0;
  let tax = 0;
  let shippingCharge = 0;
  let grandTotal = 0;
  for(let item of cart){
    total = total + item.price;
    tax = total * 0.1;
    shippingCharge = shippingCharge + item.shipping;
    grandTotal = total + shippingCharge + tax;
  }
  return (
    <div className='bg-slate-100 p-8 rounded-lg'>
    <h1 className='text-center font-bold'>Order Summary</h1>    
    <div className='text-lg mt-8 leading-10 font-medium text-gray-600'>
    <h5 className='border-b mt-2  flex items-center justify-between'>Product Quantity : <span>{cart.length}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>Total Price : <span>${total.toFixed(2)}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>Tax : <span>${tax.toFixed(2)}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>Total Shipping Charge : <span>${shippingCharge.toFixed(2)}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>Grand Total : <span>${grandTotal.toFixed(2)}</span></h5>  
    </div>  
    <div className='mt-8 flex flex-col'>
     <button onClick={() => removeDataBase()} className='font-medium text-xl flex gap-2  justify-center text-white bg-blue-600 hover:bg-blue-800 duration-500 py-2 rounded-lg mb-4 items-center'>Clear Cart <HiTrash /></button>
     <button className='font-medium text-xl flex gap-2  justify-center text-white bg-blue-600 hover:bg-blue-800 duration-500 py-2 rounded-lg items-center'>Review Order <HiShoppingCart /></button>
    </div>    
    </div>
  )
}

export default Cart