import React from 'react'
import './Shop.css'
import { Link } from 'react-router-dom';
import Cart from '../../../Hooks/Cart/Cart';
import useCart from '../../../Hooks/useCart';
import { HiShoppingCart } from 'react-icons/hi';
import UseProducts from '../../../Hooks/UseProducts';
import ProductCart from '../../../Hooks/ProductCart/ProductCart';
import { addToDataBase, removeDataBase } from '../../../utilities/dataBase';


function Shop() {

  const [products] = UseProducts();
  const [cart, setCart] = useCart(products);



  

  const handleAddToCart = item => {
    let newCarts = [];  
    const exists = cart.find(product => product.key === item.key);
    if(!exists){
      item.quantity = 1;
      newCarts = [...cart, item]
    }else{
      const rest = cart.filter(product => product.key !== item.key);
      exists.quantity = exists.quantity + 1;
      newCarts = [...rest, exists];
    }
    setCart(newCarts)
    addToDataBase(item.key)
  }

  const handleRemove = () => {
    removeDataBase()
    setCart([])
  }


  return (
    <div className='w-full'>
      <div className='grid grid-cols-4 mt-40 container mx-auto'>
      <div className="product_container col-span-3 px-4">
      <div className='grid grid-cols-3 gap-12'>
        {
          products.map(product => <ProductCart key={product.key} handleAddToCart={handleAddToCart} product={product}/>)
        }
      </div>
      </div>
      <div className="cart_container"><h1 className='text-3xl'>
      <Cart cart={cart} handleRemove={handleRemove}>
      <Link to={'/order'} className='font-medium text-xl flex gap-2  justify-center text-white bg-blue-600 hover:bg-blue-800 duration-500 py-2 rounded-lg items-center'>Review Order <HiShoppingCart /></Link>  
      </Cart>  
      </h1></div>
      </div>
    </div>
  )
}

export default Shop