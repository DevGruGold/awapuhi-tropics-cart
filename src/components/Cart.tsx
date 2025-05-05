
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, toggleCart, totalPrice, totalItems, clearCart } = useCart();

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col animate-in slide-in-from-right">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="font-medium text-lg">Your Cart ({totalItems})</h2>
          <button 
            onClick={toggleCart}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Button 
                onClick={toggleCart} 
                className="bg-awapuhi-600 hover:bg-awapuhi-700"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <CartItem key={`${item.id}-${item.size}`} item={item} />
              ))}
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span>Subtotal</span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <Link 
              to="/checkout"
              onClick={toggleCart}
              className="block w-full"
            >
              <Button 
                className="w-full bg-awapuhi-600 hover:bg-awapuhi-700 text-white py-6 rounded-full"
              >
                Checkout
              </Button>
            </Link>
            <button 
              onClick={clearCart} 
              className="mt-2 text-sm text-gray-500 hover:text-gray-700 w-full text-center"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
