
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import CartItem from "@/components/CartItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create order message for WhatsApp
      const orderDetails = items.map(
        (item) => `- ${item.name} (${item.size}): ${item.quantity} x $${item.price.toFixed(2)}`
      ).join("\n");
      
      const message = `
New Order:
Customer: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}

Items:
${orderDetails}

Total: $${totalPrice.toFixed(2)}
      `;
      
      // Format WhatsApp message
      const encodedMessage = encodeURIComponent(message.trim());
      const whatsappNumber = "50661500559"; // WhatsApp number without the +
      
      // Open WhatsApp with the message
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
      
      // Show success message
      toast({
        title: "Order Submitted",
        description: "Your order has been sent via WhatsApp. Thank you for shopping with us!",
      });
      
      // Clear cart and navigate back to home
      clearCart();
      navigate("/");
      
    } catch (error) {
      console.error("Error submitting order:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold mb-8 text-center">Checkout</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 mb-6">Your cart is empty</p>
              <Button 
                onClick={() => navigate("/")}
                className="bg-awapuhi-600 hover:bg-awapuhi-700"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-medium mb-6">Billing Details</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email"
                        value={formData.email} 
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Shipping Address</Label>
                      <Input 
                        id="address" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full mt-8 bg-awapuhi-600 hover:bg-awapuhi-700 text-white py-6 rounded-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Complete Order via WhatsApp"}
                  </Button>
                  
                  <p className="mt-4 text-sm text-gray-500 text-center">
                    Your order details will be sent via WhatsApp for confirmation.
                  </p>
                </form>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {items.map((item) => (
                      <CartItem key={`${item.id}-${item.size}`} item={item} />
                    ))}
                  </div>
                  
                  <div className="border-t mt-6 pt-6">
                    <div className="flex justify-between mb-2">
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Shipping</span>
                      <span>Calculated at next step</span>
                    </div>
                    <div className="flex justify-between font-medium text-lg mt-4">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
