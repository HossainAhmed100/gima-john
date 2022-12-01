import React, { useEffect, useState } from 'react'
import { addToDataBase } from '../../../utilities/dataBase';
import Cart from '../../Hooks/Cart/Cart';
import ProductCart from '../../Hooks/ProductCart/ProductCart'
import './Shop.css'


function Shop() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  const handleAddToCart = id => {
    setCart([...cart, id])
    addToDataBase(id)
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
      <Cart cart={cart}/>  
      </h1></div>
      </div>
    </div>
  )
}

export default Shop