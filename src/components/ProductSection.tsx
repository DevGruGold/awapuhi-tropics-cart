import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Minus, Plus } from "lucide-react";

const ProductSection = () => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("250ml");

  const handleAddToCart = () => {
    addItem({
      id: "awapuhi-shampoo",
      name: "Hawaiian Shampoo (Awapuhi)",
      price: getPrice(),
      quantity: quantity,
      size: selectedSize,
      image: "/images/hero.jpg",
    });
  };

  const getPrice = () => {
    switch (selectedSize) {
      case "100ml":
        return 12.99;
      case "250ml":
        return 24.99;
      case "500ml":
        return 39.99;
      default:
        return 24.99;
    }
  };

  const sizeOptions = [
    { value: "100ml", label: "100ml - $12.99" },
    { value: "250ml", label: "250ml - $24.99" },
    { value: "500ml", label: "500ml - $39.99" },
  ];

  const benefits = [
    "Cold-pressed for maximum purity",
    "Free from synthetics and silicones",
    "Natural plant-based preservatives",
    "Works as leave-in conditioner, scalp treatment & skin tonic",
    "Refrigerated for peak freshness",
  ];

  return (
    <section id="product" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden">
              <img 
                src="/images/hero.jpg" 
                alt="Hawaiian Shampoo Awapuhi" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold mb-2">Hawaiian Shampoo</h2>
            <h3 className="text-xl font-serif italic text-awapuhi-700 mb-6">Awapuhi</h3>
            
            <div className="text-2xl font-medium mb-6">${getPrice()}</div>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Sourced from the heart of Costa Rica's rainforests, our Hawaiian Shampoo is a luxurious blend of 
                wild Awapuhi (shampoo ginger) and soothing aloe vera.
              </p>
              <p className="text-gray-700">
                Cold-pressed for purity, this natural conditioner hydrates, nourishes, and revitalizes both scalp and skin.
              </p>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Size</label>
              <Select
                value={selectedSize}
                onValueChange={setSelectedSize}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {sizeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="mx-4 text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
                  aria-label="Increase quantity" 
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <Button
              onClick={handleAddToCart}
              className="w-full bg-awapuhi-600 hover:bg-awapuhi-700 text-white py-6 rounded-full text-lg"
            >
              Add to Cart
            </Button>
            
            <div className="mt-10">
              <h4 className="text-lg font-medium mb-4">Key Benefits</h4>
              <ul>
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start mb-3">
                    <Check className="h-5 w-5 text-awapuhi-500 mr-2 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Awapuhi Plant Information Section */}
        <div className="mt-20 bg-earth-50 rounded-2xl p-8">
          <h3 className="text-3xl font-serif text-center mb-10">The Awapuhi Plant</h3>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
              <p className="text-gray-700 mb-4">
                The Awapuhi plant (Zingiber zerumbet), commonly known as shampoo ginger, is a tropical flowering plant native to Southeast Asia but now cultivated throughout tropical regions including Hawaii and Costa Rica.
              </p>
              <p className="text-gray-700 mb-4">
                Its striking red pinecone-shaped flower heads contain a clear, slippery liquid that indigenous peoples have used for centuries as a natural hair and body cleanser, giving it the name "shampoo ginger."
              </p>
              <p className="text-gray-700">
                The liquid is rich in saponins that create a natural lather, along with anti-inflammatory and moisturizing compounds that nourish both hair and skin, making it a perfect natural beauty ingredient.
              </p>
            </div>
            
            <div>
              <img 
                src="/lovable-uploads/afdb7664-1486-461b-bb4e-aa1ac8a8a566.png" 
                alt="Awapuhi plants growing in natural habitat" 
                className="rounded-xl object-cover w-full h-auto max-h-[500px] shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
