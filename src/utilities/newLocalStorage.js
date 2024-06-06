const getDb = () => localStorage.getItem("cartItems");

export const findOne = (id) => {
  console.log(id);
  const exist = getDb();
  let shopping_cart = {};
  if (exist){
    shopping_cart= JSON.parse(exist)
    console.log("shopping_cart");

    for (let element of shopping_cart){
      console.log(element.amount);
      if(element.id == id){
        return element.cartQuantity
      }else{
        return "fuck"
      }
    }
  }
};
