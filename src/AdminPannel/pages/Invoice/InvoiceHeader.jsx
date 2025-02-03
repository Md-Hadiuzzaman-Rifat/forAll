/* eslint-disable react/prop-types */

const InvoiceHeader = ({ details }) => {
  return (
    <div className="invoiceHeader font-abc leading-4 pt-4">
      <div className="invoice-top">
        <div>
          <h1 className="invoice-logo">{import.meta.env.VITE_WEB_NAME}</h1>
          <p className="text-sm">Invoice Id: {details?._id}</p>
          <p className="text-sm">Date: {details?.date}</p>
        </div>
        <div className="invoice-text">
          <h1>Invoice</h1>
        </div>
      </div>
      <hr />
      <div className="invoice-billing">
        <div className="flex text-sm flex-row w-full justify-between items-center">
          <div>
            <p>
              BILL FROM: <strong>{import.meta.env.VITE_WEB_NAME}</strong>
            </p>

            <p>Phone: 01970134360</p>

            <p>Address: Mirpur-11, Dhaka-1216</p>
          </div>
          <img
          className="h-12"
            src="../../../images/flexfit27.png"
            alt=""
          />
        </div>
        <hr />
        <div className="font-semibold">
          <p>
            BILL TO:{" "}
            <strong>
              {details.firstName} {details.lastName}
            </strong>
          </p>
          <p className="tracking-wide">Phone: {details.phone}</p>
          <p>Address: {details.address}</p>
          <p>Email: {details.email}</p>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default InvoiceHeader;
