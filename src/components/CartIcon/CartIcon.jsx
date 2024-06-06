// import img from "../../assets/cart.png"
import { useNavigate } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";


const CartIcon = () => {
    const navigate= useNavigate()
    const redirect=()=>{
        navigate('/shoppingCart')
    }
    return (
        <div onClick={redirect} className="fixed bottom-[50%] z-50 right-2">
            <RiShoppingCartFill className=" cursor-pointer text-2xl h-12 w-12 p-2 rounded-md text-white bg-gray-600"/>
        </div>
    );
};

export default CartIcon;