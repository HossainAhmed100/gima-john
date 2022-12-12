import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'

function OrderCart({item, deleteItem, itemIncrement, itemDecrement}) {
    
  return (
    <tr className="">
        <td className="px-6 py-4 text-sm font-medium text-gray-900">
            <div className='flex items-center'>
                <img src={item.img} className="w-20" alt="" />
                <div className='ml-4'>
                    <p title={item.name} className='order_cart_title text-base'>{item.name}</p>
                    <p className='text-base text-gray-500 mt-1'>{item.category}</p>
                </div>
            </div>
        </td>
        <td className="text-lg text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
        ${item.price}
        </td>
        <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
        <div className="flex border-gray-200  border flex-row h-10 rounded-lg ">
            <button onClick={() => itemDecrement(item)} data-action="decrement" className="border-r duration-200  text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input type="number" className="focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={item.quantity}></input>
            <button onClick={() => itemIncrement(item)} data-action="increment" className="border-l duration-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                <span className="m-auto text-2xl font-thin">+</span>
            </button>
        </div>
        </td>
        <td className="text-lg text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
        ${parseInt(item.price * item.quantity)}
        </td>
        <td className="text-lg text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
        <button onClick={() => deleteItem(item)}><RiDeleteBin6Line className='text-rose-500'/></button>
        </td>
    </tr>
  )
}

export default OrderCart