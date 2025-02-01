import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";

const InvoicePage = () => {
  const { state } = useLocation() || {};


  const downloadPDF = async () => {
    const content = document.getElementById("invoice");
    const canvas = await html2canvas(content, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("flexfit27.pdf");
  };

  let dc= state?.division === "osd" ? 120 : 60
  
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div id="invoice" className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <header className="border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Invoice</h1>
          <p className="text-sm text-gray-500">{state?.orderStatus.date}</p>
        </header>

        <section className="mb-6 flex justify-between">
          <div>
          <h2 className="text-lg font-semibold text-gray-700">Bill To:</h2>
          <p className="text-gray-800"><span className="font-bold text-black">Name: </span>{state?.orderStatus?.name}</p>
          <p className="text-gray-500"> <span className="font-bold text-black">Address: </span> {state?.orderStatus?.address}</p>
          <p className="text-gray-500"> <span className="font-bold text-black">Email: </span> {state?.orderStatus?.email}</p>
          <p className="text-gray-500"> <span className="font-bold text-black">Phone: </span> {state?.orderStatus?.phone}</p>
          </div>
          <div>
            <img src="/images/flexfit27.png" className="h-16" alt="" />
          </div>
        </section>
        <table className="w-full text-left border-collapse mb-6">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 text-gray-700">Item</th>
              <th className="p-3 text-gray-700">Quantity</th>
              <th className="p-3 text-gray-700">Price</th>
              <th className="p-3 text-gray-700">Total</th>
            </tr>
          </thead>
          <tbody>
              {/* <tr className="border-b">
              <td className="p-3 text-gray-800">Item 1</td>
              <td className="p-3 text-gray-800">2</td>
              <td className="p-3 text-gray-800">$50.00</td>
              <td className="p-3 text-gray-800">$100.00</td>
            </tr> */}
            {
              state?.orderStatus?.orderedItem?.map((i, id)=>(
                <tr className="border-b" key={id}>
                
              <td className="p-3 text-gray-800">{i?.name}</td>
              <td className="p-3 text-gray-800">{i?.cartQuantity}</td>
              <td className="p-3 text-gray-800">{i?.price}</td>
              <td className="p-3 text-gray-800">{i?.price * i?.cartQuantity}</td>
            </tr>
              )
              )
            }            
          </tbody>
        </table>
        
        <section className="flex justify-end">
          <div className="text-right">
            <p className="text-gray-700 font-semibold">Subtotal: {state?.orderStatus?.total} Tk</p>
            <p className="text-gray-700 font-semibold">Delivery: {state?.division === "osd" ? 120 : 60} Tk</p> 
            <p className="text-black font-semibold text-lg rounded-sm border-gray-500 border-4 px-4 mt-2">Total: {state?.orderStatus?.total + dc} Taka</p>
          </div>
        </section>
       
        <footer className="mt-8 text-center text-sm text-gray-500">
          Thank you for your purchase❤️️❤️️! If you have any questions, contact us at <span className="text-blue-500 underline">fashionflexfit@gmail.com</span>.
        </footer>
      </div>
      <div className="text-center mt-6">
        <button
          onClick={downloadPDF}
          className="px-6 py-2 mb-20 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
        >
          Download Invoice
        </button>
        <span className="px-6 cursor-pointer py-2 mb-20 text-blue-700 underline ml-4">Back to Home</span>
      </div>
    </div>
  );
};

export default InvoicePage;
