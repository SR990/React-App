

function OrderSummary({ order, onClose }) {
 

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow p-6 relative">
    
      <button
        onClick={onClose} 
        className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex justify-center items-center"
      >
        X
      </button>
      
      <h1 className="text-2xl font-semibold mb-4 sm:text-xl">Order Summary</h1>
      <p className="mb-2">Order #: {order.id}</p>
      <p className="mb-5">Time: {order.time}</p>
      <hr className="my-4" />
      <p className="mt-2 mb-2">Table: {order.table}</p>
      <p className="mb-5">Food: {order.items[0].name}</p>
      <hr className="my-4" />

      <p className="mb-2 mt-2">Subtotal: ${order.subtotal}</p>
      <p className="mb-2">SGST: ${order.sgst}</p>
      <p className="mb-2">CGST: ${order.cgst}</p>
      <p className="mb-2 mt-7">Total Amount: ${order.totalAmount}</p>

      <button className="bg-red-600 text-white p-3 rounded mx-auto block mt-6 max-w-xs sm:w-full">
        Edit
      </button>
    </div>
  );
}

export default OrderSummary;
