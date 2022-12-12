import React from 'react'
import {HiTrash} from 'react-icons/hi'
function Cart(props){
  const {cart, handleRemove} = props;
  const num = numbers => {
    const numFor = Intl.NumberFormat('en-US');
    const numToFixed = numbers.toFixed(2);
    const newNum = parseFloat(numToFixed);
    return numFor.format(newNum);
  }

  let total = 0;
  let tax = 0;
  let shippingCharge = 0;
  let grandTotal = 0;
  let itemQuantity = 0;
  for(let item of cart){
    total = total + item.price * item.quantity;
    tax = total * 0.1;
    itemQuantity = itemQuantity + parseInt(item.quantity);
    shippingCharge = shippingCharge + item.shipping;
    grandTotal = total + shippingCharge + tax;
  }
  return (
    <div className='bg-slate-100 p-8 rounded-lg'>
    <h1 className='text-center font-bold'>Order Summary</h1>    
    <div className='text-lg mt-8 leading-10 font-medium text-gray-600'>
    <h5 className='border-b mt-2  flex items-center justify-between'>Total Items : <span>{cart.length}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>Product Quantity : <span>{itemQuantity}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>Total : <span>${num(total)}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>Delivery : <span>${num(shippingCharge)}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>Discount : <span>${0}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>Tax : <span>${num(tax)}</span></h5>   
    <h5 className='border-b mt-2  flex items-center justify-between'>SubTotal : <span>${num(grandTotal)}</span></h5>  
    </div>  
    <div className='mt-8 flex flex-col'>
     <button onClick={() => handleRemove()} className='font-medium text-xl flex gap-2  justify-center text-white bg-blue-600 hover:bg-blue-800 duration-500 py-2 rounded-lg mb-4 items-center'>Clear Cart <HiTrash /></button>
     
     {props.children}
    </div>    
    </div>
  )
}

export default Cart