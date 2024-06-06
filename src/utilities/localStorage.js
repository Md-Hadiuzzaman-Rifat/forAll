/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
// add product to local storage

const addToDb = id => {
    const exists = getDb();
    let shopping_cart = {};
    if (!exists) {
      shopping_cart[id] = 1;
    }
    else {
      shopping_cart = JSON.parse(exists);
      if (shopping_cart[id]) {
        const newCount = shopping_cart[id] + 1;
        shopping_cart[id] = newCount;
      }
      else {
        shopping_cart[id] = 1;
      }
    }
    updateDb(shopping_cart);
  }

// Find single Item
const findOne=(id)=>{
  const exist= getDb()
  let shopping_cart={}
  if (exist){
    shopping_cart= JSON.parse(exist)
    if(!shopping_cart[id]){
        return shopping_cart[id] = 0
    }else{
      return shopping_cart[id]
    }
  }
}


// reduce amount from db
  const reduceFromDb=id=>{
    const exists= getDb()
    let shopping_cart={}

    if(!exists){
      return
    }else{
        shopping_cart= JSON.parse(exists)
        const newCount = shopping_cart[id]-1
        shopping_cart[id]= newCount
    }
    updateDb(shopping_cart)
  }
  
  // Either localStorage exist or not
  const getDb = () => localStorage.getItem('shopping_cart');
  

  // update db
  const updateDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
  }
  // delete item from shopping cart.
  const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {
  
    }
    else {
      const shopping_cart = JSON.parse(exists);
      delete shopping_cart[id];
      updateDb(shopping_cart);
    }
  }
  // get stored cart
  const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  } 
  
  // clearTheCart
  const clearTheCart = () => {
    localStorage.removeItem('shopping_cart');
  }
  
  export { addToDb, removeFromDb, clearTheCart, getStoredCart , reduceFromDb, findOne}

  