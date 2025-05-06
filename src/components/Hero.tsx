
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

const Hero = () => {
  const scrollToProduct = () => {
    const productSection = document.getElementById('product');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[85vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background image with fallback color */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 bg-earth-100"
        style={{ backgroundImage: "url('/lovable-uploads/afdb7664-1486-461b-bb4e-aa1ac8a8a566.png')" }}
      />
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-0"></div>
      
      {/* Top gradient overlay for navbar */}
      <div className="absolute top-0 left-0 right-0 h-32 nav-gradient-overlay z-0"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <Camera className="h-12 w-12 text-earth-300 mb-4" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 md:mb-6 text-shadow-lg">
            Hawaiian Shampoo
          </h1>
          <h2 className="text-xl md:text-3xl font-serif text-white mb-6 max-w-3xl mx-auto text-shadow tracking-wide">
            <span className="italic">Awapuhi</span> – Fresh from the Tropics to Your Hair & Skin
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10 text-shadow-sm">
            Sourced from Costa Rica's rainforests, our luxurious blend of wild Awapuhi and aloe vera
            hydrates, nourishes, and revitalizes.
          </p>
          <Button 
            onClick={scrollToProduct} 
            className="bg-earth-500 hover:bg-earth-600 text-white px-8 py-6 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            Discover Now
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 flex justify-center">
        <button 
          onClick={scrollToProduct}
          className="animate-bounce p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 md:h-8 md:w-8 text-white"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
