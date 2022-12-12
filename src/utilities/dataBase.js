const addToDataBase = id => {
    const storedCart = getDb();
    let savedCard = {};
    if(!storedCart){
        savedCard[id] = 1;
    }else{
        savedCard = JSON.parse(storedCart)
        if(savedCard[id]){
            const newCuantity = savedCard[id] + 1;
            savedCard[id] = newCuantity;
        }else {
            savedCard[id] = 1;
          }
    }
    upDateDataBase(savedCard)
}
const getDb = () => localStorage.getItem('ShoppingCart');

const getDataBase = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
};
const upDateDataBase = (data) => localStorage.setItem("ShoppingCart", JSON.stringify(data));
const removeDataBase = () => {
    const exist = getDataBase();
    if(exist){
        localStorage.removeItem("ShoppingCart")
    }else{
        return
    }
};


const removeItemByKey = item => {
    const exists = getDb();
    if(!exists){

    }else{
        const storedCart = JSON.parse(exists);
        delete storedCart[item];
        upDateDataBase(storedCart)
    }
}

export {
    addToDataBase,
    getDataBase,
    removeItemByKey,
    upDateDataBase,
    removeDataBase
}