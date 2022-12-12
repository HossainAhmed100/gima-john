import React from 'react'
import { HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import OrderCart from '../../../Hooks/OrderCart';
import useCart from '../../../Hooks/useCart'
import UseProducts from '../../../Hooks/UseProducts';
import { removeDataBase, removeItemByKey } from '../../../utilities/dataBase';
import Cart from '../../../Hooks/Cart/Cart'

function Order() {
  const [products] = UseProducts();
  const [cart, setCart] = useCart(products);
  const handleRemove = () => {
    removeDataBase()
    setCart([])
  }
  const deleteItem = item => {
   
    const rest = cart.filter(product => product.key !== item.key);
    setCart(rest);
    removeItemByKey(item.key);
   
  }

  const itemIncrement = item => {
    const exists = cart.find(product => product.key === item.key);
    if(exists){
      const res = cart.filter(product => product.key !== item.key);
      exists.quantity = exists.quantity + 1;
      setCart([...res, exists])
    }
  }
  const itemDecrement = item => {
    const exists = cart.find(product => product.key === item.key);
    if(exists){
      const res = cart.filter(product => product.key !== item.key);
      exists.quantity = exists.quantity - 1;
      setCart([...res, exists])
    }
  }

  return (
    <div className='w-full'>
      <div className='grid grid-cols-4 mt-40 container mx-auto'>
      <div className="product_container col-span-3 px-4">
      <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-lg border-gray-200 border">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th scope="col" className="text-base font-bold text-gray-900 px-6 py-4 text-left">
                Product
              </th>
              <th scope="col" className="text-base font-bold text-gray-900 px-6 py-4 text-left">
                Price
              </th>
              <th scope="col" className="text-base font-bold text-gray-900 px-6 py-4 text-left">
                Quantity
              </th>
              <th scope="col" className="text-base font-bold text-gray-900 px-6 py-4 text-left">
               Total Price
              </th>
              <th scope="col" className="text-base font-bold text-gray-900 px-6 py-4 text-left">
                Remove
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-200'>
            {
              cart.map(item => <OrderCart item={item} itemDecrement={itemDecrement} itemIncrement={itemIncrement} key={item.key} deleteItem={deleteItem}/>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      </div>
      <div className="cart_container"><h1 className='text-3xl'>
      <Cart cart={cart} handleRemove={handleRemove}>
      <Link to={'/shop'} className='font-medium text-xl flex gap-2  justify-center text-white bg-blue-600 hover:bg-blue-800 duration-500 py-2 rounded-lg items-center'>Checkout now <HiShoppingCart /></Link>
      </Cart>  
      </h1></div>
      </div>
    </div>
  )
}

export default Order