
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProduct = () => {
    const productSection = document.getElementById('product');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background image with fallback color */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 bg-earth-100"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* Top gradient overlay for navbar */}
      <div className="absolute top-0 left-0 right-0 h-32 nav-gradient-overlay z-0"></div>
      
      <div className="container mx-auto px-4 z-10 text-center relative">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 md:mb-6 text-shadow-lg">
            Hawaiian Shampoo
          </h1>
          <h2 className="text-xl md:text-3xl font-serif text-white mb-6 max-w-3xl mx-auto text-shadow tracking-wide">
            <span className="italic">Awapuhi</span> – Fresh from the Tropics to Your Hair & Skin
          </h2>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto mb-8 text-shadow-sm">
            Sourced from Costa Rica's rainforests, our luxurious blend of wild Awapuhi and aloe vera
            hydrates, nourishes, and revitalizes.
          </p>
          <Button 
            onClick={scrollToProduct} 
            className="bg-awapuhi-600 hover:bg-awapuhi-700 text-white px-6 py-4 md:px-8 md:py-6 rounded-full text-base md:text-lg font-medium shadow-lg"
          >
            Shop Now
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-5 md:bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 md:h-10 md:w-10 text-white opacity-80 drop-shadow-lg"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
