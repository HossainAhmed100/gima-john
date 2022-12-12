import { useState, useEffect } from "react";
import { getDataBase } from "../utilities/dataBase";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getDataBase();
        let newCart = [];
        if(storedCart){
            for(const id in storedCart){
                const addedProduct = products.find(product => product.key === id);
                if(addedProduct){
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    newCart.push(addedProduct)
                }
            }
        }
        setCart(newCart)    
    }, [products])

    return [cart, setCart];
    
}

export default useCart;