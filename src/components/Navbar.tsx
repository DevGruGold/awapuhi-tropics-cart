
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import Cart from "./Cart";

const Navbar = () => {
  const { totalItems, toggleCart, isCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-2xl font-serif font-bold text-awapuhi-700">
            Awapuhi
          </Link>
          
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#product" className="hover:text-awapuhi-700 transition-colors">
              Product
            </a>
            <a href="#about" className="hover:text-awapuhi-700 transition-colors">
              About
            </a>
            <a href="#benefits" className="hover:text-awapuhi-700 transition-colors">
              Benefits
            </a>
          </div>
          
          <button 
            className="relative flex items-center" 
            onClick={toggleCart}
            aria-label="Open cart"
          >
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-awapuhi-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>
      
      {isCartOpen && <Cart />}
    </>
  );
};

export default Navbar;
