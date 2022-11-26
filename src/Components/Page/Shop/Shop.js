import React, { useEffect, useState } from 'react'
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
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

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for(let key in storedCart){
      const addedProduct = products.find(product => product.key === key);
      if(addedProduct){
        const quantity = storedCart[key];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart)
  }, [products])

  const handleAddtoCart = selectedProduct => {
    let newCart = [];
    const exists = cart.find(product => product.key === selectedProduct.key);
    if(!exists){
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }else{
      const rest = cart.filter(product => product.key !== selectedProduct.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists]
    }
    setCart(newCart)
    addToDb(selectedProduct.key)
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