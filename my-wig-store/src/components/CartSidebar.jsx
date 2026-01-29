import React from "react";
import { X } from "lucide-react";

const CartSidebar = ({ isOpen, onClose, cart, onRemove, onCheckout }) => {
 const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose} />
      )}
      
      <div className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-pink-600 font-semibold mt-1">CFA{item.price}</p>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-pink-600">CFA{total.toFixed(2)}</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;



