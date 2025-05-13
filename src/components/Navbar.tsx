
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Cart from "./Cart";

const Navbar = () => {
  const { totalItems, toggleCart, isCartOpen } = useCart();
  const { language, toggleLanguage } = useLanguage();
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
          
          <div className="hidden md:flex items-center space-x-6 text-sm">
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
            
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1.5 rounded-full transition-all duration-300 border ${
                isScrolled 
                  ? "border-awapuhi-500 text-awapuhi-700 hover:bg-awapuhi-50" 
                  : "border-white/40 text-white hover:bg-white/10 backdrop-blur-sm text-shadow-sm"
              }`}
              aria-label="Toggle language"
            >
              <span className={`font-medium ${language === 'en' ? 'opacity-100' : 'opacity-60'}`}>English</span>
              <span className="mx-1">|</span>
              <span className={`font-medium ${language === 'es' ? 'opacity-100' : 'opacity-60'}`}>Español</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
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
            
            {/* Mobile language toggle */}
            <button
              onClick={toggleLanguage}
              className={`md:hidden px-2 py-1 rounded-full transition-all duration-300 border ${
                isScrolled 
                  ? "border-awapuhi-500 text-awapuhi-700 hover:bg-awapuhi-50" 
                  : "border-white/40 text-white hover:bg-white/10 backdrop-blur-sm text-shadow-sm"
              }`}
              aria-label="Toggle language"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
        </div>
      </nav>
      
      {isCartOpen && <Cart />}
    </>
  );
};

export default Navbar;
