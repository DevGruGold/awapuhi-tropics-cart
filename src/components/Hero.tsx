
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
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('/images/hero.jpg')", 
          filter: "brightness(0.7)"
        }}
      />
      
      <div className="container mx-auto px-4 z-10 text-center relative">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
          Hawaiian Shampoo
        </h1>
        <h2 className="text-2xl md:text-3xl font-serif text-white mb-8 max-w-3xl mx-auto drop-shadow-lg tracking-wide">
          <span className="italic">Awapuhi</span> – Fresh from the Tropics to Your Hair & Skin
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto mb-10 drop-shadow">
          Sourced from Costa Rica's rainforests, our luxurious blend of wild Awapuhi and aloe vera
          hydrates, nourishes, and revitalizes.
        </p>
        <Button 
          onClick={scrollToProduct} 
          className="bg-awapuhi-600 hover:bg-awapuhi-700 text-white px-8 py-6 rounded-full text-lg"
        >
          Shop Now
        </Button>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-white opacity-70"
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
