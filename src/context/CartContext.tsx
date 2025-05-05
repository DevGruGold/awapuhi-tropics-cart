
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { toast } from "@/components/ui/use-toast";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
};

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = (item: CartItem) => {
    setItems(prevItems => {
      // Check if item already exists in cart
      const existingItem = prevItems.find(i => i.id === item.id && i.size === item.size);
      
      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map(i => 
          i.id === item.id && i.size === item.size 
            ? { ...i, quantity: i.quantity + item.quantity } 
            : i
        );
      } else {
        // Add new item if it doesn't exist
        return [...prevItems, item];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${item.name} (${item.size}) has been added to your cart.`,
    });
    
    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      isCartOpen,
      toggleCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
