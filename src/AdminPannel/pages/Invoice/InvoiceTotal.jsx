/* eslint-disable react/prop-types */

const InvoiceTotal = ({details}) => {
  let dc= details?.division === "isd" ? 60 : 120
  return (
    <div className="invoiceTotal">
      <div className="invoice-content">
        <div>
          <p>Terms & Conditions:</p>
        </div>
        <div className="total-cost">
          <div className="left">
            <p>Subtotal:</p>
            <p>Delivery Charge:</p>
            {/* <p>Total:</p> */}
          </div>
          <div className="right">
            <p>{details.total} Taka</p>
            {console.log(details)
            }
            <p>{details?.division === "isd" ? 60 : 120} Taka</p>
            {/* <p>{details?.total} Taka</p> */}
          </div>
        </div>
      </div>
      <hr />
      <div className="invoice-payable">
        <h2>Total: {details?.total +dc}</h2>
      </div>
    </div>
  );
}; 

export default InvoiceTotal;
