const addToDataBase = id => {
    const exists = getDataBase();
    let storedCart = {};
    if(!exists){
        storedCart[id] = 1;
    }else{
        storedCart = JSON.parse(exists);
        if(storedCart[id]){
            const newCuantity = storedCart[id] + 1;
            storedCart[id] = newCuantity;
        }else {
            storedCart[id] = 1;
          }
    }
    upDateDataBase(storedCart)
}

const getDataBase = () => localStorage.getItem("ShoppingCart");
const upDateDataBase = (data) => localStorage.setItem("ShoppingCart", JSON.stringify(data));
const removeDataBase = () => {
    const exist = getDataBase();
    if(exist){
        localStorage.removeItem("ShoppingCart")
    }else{
        return
    }
};

export {
    addToDataBase,
    getDataBase,
    upDateDataBase,
    removeDataBase
}