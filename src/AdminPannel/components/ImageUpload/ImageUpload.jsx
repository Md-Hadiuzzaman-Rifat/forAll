

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "../../../features/cartSlice/cartSlice";

const ImageUpload = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div>
      <div>
        <h1>Total Product Ordered : {cart?.cartTotalQuantity}</h1>
        <p>Price Total= {cart.cartTotalAmount} Taka</p>
        </div>
        <hr />
      <div>
      {
        cart?.cartItems?.map(item=> <div key={item.id}>
          <p>product id: {item.id?.split(">>>")[0]}</p>
          <p>name: {item.name}</p>
          <img className="w-32" src={item.image} alt="" />
          <p>Size: {item.id?.split(">>>")[1]}</p>
          <p>Quantity: {item.cartQuantity}</p>
        </div> )
      }
      </div>
      <hr />
      
    </div>
  );
};

export default ImageUpload;