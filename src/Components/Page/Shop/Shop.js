import React, { useEffect, useState } from 'react'
import { addToDataBase, getDataBase, removeDataBase } from '../../../utilities/dataBase';
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

  useEffect(() => {
    const storedCart = getDataBase();
    let newCart = [];
    if(storedCart){
      const  items = JSON.parse(storedCart);
      for(let id in items){
        const addedProduct = products.find(product => product.key === id);
        if(addedProduct){
          const quantity = items[id];
          addedProduct.quantity = quantity;
          newCart = [...newCart, addedProduct]
        }
      }
      setCart(newCart)
    }
  }, [products])

  const handleAddToCart = item => {
    let newCarts = []; 
    console.log(item.key)
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
      <Cart cart={cart} handleRemove={handleRemove}/>  
      </h1></div>
      </div>
    </div>
  )
}

export default Shop