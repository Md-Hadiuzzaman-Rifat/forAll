/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useGetSingleOrderQuery } from "../../../features/confirmOrder/confirmOrder";
import "./ViewOrder.scss";

const ViewOrder = () => {
  const { orderId } = useParams();
  const { data, isLoading } = useGetSingleOrderQuery(orderId);

  console.log(data);
  const {
    _id,
    address,
    date,
    division,
    email,
    name,
    phone,
    status,
    total,
    orderedItem,
    payment,
  } = data || {};

  

  return (
    <div className="viewOrder">
      {isLoading && "Loading..."}
      {!isLoading && data && (
        <div>
          <h4 className="text-xl text-indigo-600 font-bold">Order Id: {_id}</h4>
          <h2 className="font-bold underline mt-8">Personal Details</h2>
          <div className="viewOrder_flex">
            <div className="left">
              <p>
                Full Name: <span className="font-semibold">{name}</span>
              </p>
              <p>
                Phone: <span className="font-semibold">{phone}</span>{" "}
              </p>
              <p>
                Email: <span className="font-semibold">{email}</span>{" "}
              </p>
            </div>
            <div className="right">
              <p>
                Address: {address}, {division}
              </p>
              <p>Time: {date}</p>
              <p>Payment: <span className="font-semibold">{payment?.phone}</span> </p>
              <p>Transaction Id: <span className="font-semibold">{payment?.transId}</span> </p>
            </div>
          </div>
        </div>
      )}
      <h2 className="mt-8 font-bold underline">Your Orders:</h2>
      {!isLoading &&
        orderedItem?.length > 0 &&
        orderedItem.map((item, index) => (
          <div key={index}>
            <div className="mb-4">
              <img style={{ width: "80px" }} src={item?.image} alt="" />
              <p>
                Order id: <span className="font-semibold"> {item.id?.split(">>>")[0]}</span>
              </p>
              <p>
                Size: <span className="font-semibold"> {item.id?.split(">>>")[1]}</span>
              </p>
              <p>
                Name: <span className="font-semibold">{item.name}</span>
              </p>
              <p>
                Unit Price:{" "}
                <span className="font-semibold">{item.price} Taka</span>
              </p>
              <p>
                Quantity:{" "}
                <span className="font-semibold">{item.cartQuantity}</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ViewOrder;
