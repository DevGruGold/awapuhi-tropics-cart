
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
import { Check, Minus, Plus, Camera } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

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
      image: "/lovable-uploads/afdb7664-1486-461b-bb4e-aa1ac8a8a566.png",
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
    <section id="product" className="py-16 md:py-24 bg-gradient-to-b from-white to-earth-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="md:w-1/2 sticky top-24">
            <div className="bg-earth-50 p-4 rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/afdb7664-1486-461b-bb4e-aa1ac8a8a566.png" 
                alt="Hawaiian Shampoo Awapuhi" 
                className="w-full h-auto object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Hawaiian Shampoo</h2>
            <h3 className="text-xl font-serif italic text-awapuhi-700 mb-6">Awapuhi</h3>
            
            <div className="text-2xl md:text-3xl font-medium mb-6 text-earth-600">${getPrice()}</div>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4 text-lg">
                Sourced from the heart of Costa Rica's rainforests, our Hawaiian Shampoo is a luxurious blend of 
                wild Awapuhi (shampoo ginger) and soothing aloe vera.
              </p>
              <p className="text-gray-700 text-lg">
                Cold-pressed for purity, this natural conditioner hydrates, nourishes, and revitalizes both scalp and skin.
              </p>
            </div>
            
            <Card className="bg-earth-50/50 mb-6 border-earth-100">
              <CardContent className="pt-6">
                <label className="block text-sm font-medium mb-2">Size</label>
                <Select
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                >
                  <SelectTrigger className="w-full bg-white">
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
              </CardContent>
            </Card>
            
            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-full border border-earth-200 flex items-center justify-center hover:bg-earth-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="mx-6 text-xl w-8 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-full border border-earth-200 flex items-center justify-center hover:bg-earth-100 transition-colors"
                  aria-label="Increase quantity" 
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <Button
              onClick={handleAddToCart}
              className="w-full bg-awapuhi-600 hover:bg-awapuhi-700 text-white py-7 rounded-full text-lg shadow-md hover:shadow-lg transition-all"
            >
              Add to Cart
            </Button>
            
            <div className="mt-10">
              <h4 className="text-xl font-serif mb-4 text-earth-800">Key Benefits</h4>
              <ul className="grid grid-cols-1 gap-3 bg-white/80 p-4 rounded-xl shadow-sm">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-awapuhi-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Section with Awapuhi Plant Info */}
        <div className="mt-24 bg-earth-50 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-serif text-earth-800 mb-6">The Awapuhi Plant</h3>
              <p className="text-gray-700 mb-4">
                The Awapuhi plant (Zingiber zerumbet), commonly known as shampoo ginger, is a tropical 
                flowering plant native to Southeast Asia but now cultivated throughout tropical regions.
              </p>
              <p className="text-gray-700 mb-4">
                Its striking red pinecone-shaped flower heads contain a clear, slippery liquid that indigenous 
                peoples have used for centuries as a natural hair and body cleanser.
              </p>
              <p className="text-gray-700">
                Rich in saponins that create a natural lather, along with anti-inflammatory and 
                moisturizing compounds, it's nature's perfect beauty ingredient.
              </p>
            </div>
            <div className="h-80 md:h-auto relative overflow-hidden">
              <img 
                src="/lovable-uploads/afdb7664-1486-461b-bb4e-aa1ac8a8a566.png" 
                alt="Awapuhi plants" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
