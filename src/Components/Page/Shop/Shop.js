import React, { useEffect, useState } from 'react'
import { countCart } from '../../../utilities/cartCount';
import Cart from '../../Hooks/Cart/Cart';
import ProductCart from '../../Hooks/ProductCart/ProductCart';
import './Shop.css'


function Shop() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  const handleAddtoCart = product => {
    const newCart = [...cart, product];
    setCart(newCart)
    countCart(cart)
  }

  return (
    <div className='w-full'>
      <div className='grid grid-cols-4 mt-40 container mx-auto'>
      <div className="product_container col-span-3 px-4">
      <div className='grid grid-cols-3 gap-12'>
        {
          products.map(product => <ProductCart handleAddtoCart={handleAddtoCart} key={product.key} product={product}/>)
        }
      </div>
      </div>
      <div className="cart_container"><h1 className='text-3xl'>
      <Cart product={cart}/>  
      </h1></div>
      </div>
    </div>
  )
}

export default Shop