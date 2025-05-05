
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
          <Link to="/" className={`text-2xl font-serif font-bold ${
            isScrolled ? "text-awapuhi-700" : "text-white text-shadow"
          }`}>
            Awapuhi
          </Link>
          
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#product" className={`transition-colors ${
              isScrolled ? "text-gray-700 hover:text-awapuhi-700" : "text-white text-shadow-sm hover:text-awapuhi-200"
            }`}>
              Product
            </a>
            <a href="#about" className={`transition-colors ${
              isScrolled ? "text-gray-700 hover:text-awapuhi-700" : "text-white text-shadow-sm hover:text-awapuhi-200"
            }`}>
              About
            </a>
            <a href="#benefits" className={`transition-colors ${
              isScrolled ? "text-gray-700 hover:text-awapuhi-700" : "text-white text-shadow-sm hover:text-awapuhi-200"
            }`}>
              Benefits
            </a>
          </div>
          
          <button 
            className={`relative flex items-center ${
              isScrolled ? "text-gray-800" : "text-white text-shadow-sm"
            }`}
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
