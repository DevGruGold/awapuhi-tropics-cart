
import { useState } from "react";
import { useCart, CartItem as CartItemType } from "@/context/CartContext";
import { Minus, Plus, X } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex items-center py-4 border-b">
      <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h4 className="font-medium text-sm">{item.name}</h4>
        <p className="text-xs text-gray-500">Size: {item.size}</p>
        <p className="text-sm font-medium mt-1">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center">
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-gray-100"
          aria-label="Decrease quantity"
        >
          <Minus className="h-3 w-3" />
        </button>
        <span className="mx-2 text-sm w-6 text-center">{quantity}</span>
        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-gray-100"
          aria-label="Increase quantity"
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>
      
      <button
        onClick={() => removeItem(item.id)}
        className="ml-4 text-gray-400 hover:text-gray-600"
        aria-label="Remove item"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartItem;
