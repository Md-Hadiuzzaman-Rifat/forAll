import { Link } from "react-router-dom";
import "./OrderSuccess.scss";

const OrderSuccess = () => {
  return (
    <div className="OrderSuccess">
      <div className="container">
        <i className="fas fa-check-circle"></i>
        <h1>Thank you for your order!</h1>
        <p>
          Your order has been received and is being processed. You will receive
          an email confirmation shortly.
        </p>
        {/* <a href="/" className="button">
          Continue Shopping
        </a> */}
        <Link className="button" to='/'>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;