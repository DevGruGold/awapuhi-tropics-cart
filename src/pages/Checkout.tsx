
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import CartItem from "@/components/CartItem";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Redirect to home if cart is empty
    if (items.length === 0) {
      navigate("/");
    }
  }, [items, navigate]);

  const handleWhatsAppOrder = async () => {
    setIsSubmitting(true);
    
    try {
      // Create order message for WhatsApp
      const orderDetails = items.map(
        (item) => `- ${item.name} (${item.size}): ${item.quantity} x $${item.price.toFixed(2)}`
      ).join("\n");
      
      const message = language === 'en' 
        ? `New Order:\n\nItems:\n${orderDetails}\n\nTotal: $${totalPrice.toFixed(2)}`
        : `Nuevo Pedido:\n\nProductos:\n${orderDetails}\n\nTotal: $${totalPrice.toFixed(2)}`;
      
      // Format WhatsApp message
      const encodedMessage = encodeURIComponent(message.trim());
      const whatsappNumber = "50661500559"; // WhatsApp number without the +
      
      // Open WhatsApp with the message
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
      
      // Show success message
      toast({
        title: language === 'en' ? "Order Submitted" : "Pedido Enviado",
        description: language === 'en' 
          ? "Your order has been sent via WhatsApp. Thank you for shopping with us!"
          : "Tu pedido ha sido enviado por WhatsApp. ¡Gracias por comprar con nosotros!",
      });
      
      // Clear cart and navigate back to home
      clearCart();
      navigate("/");
      
    } catch (error) {
      console.error("Error submitting order:", error);
      toast({
        title: language === 'en' ? "Error" : "Error",
        description: language === 'en'
          ? "There was a problem submitting your order. Please try again."
          : "Hubo un problema al enviar tu pedido. Por favor intenta de nuevo.",
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
          <h1 className="text-3xl font-serif font-bold mb-8 text-center">{t('checkout')}</h1>
          
          <div className="max-w-2xl mx-auto">
            {items.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-xl font-medium mb-6">{t('orderSummary')}</h2>
                
                <div className="space-y-4 max-h-96 overflow-y-auto mb-6">
                  {items.map((item) => (
                    <CartItem key={`${item.id}-${item.size}`} item={item} />
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between font-medium text-lg mt-4">
                    <span>{t('subtotal')}</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleWhatsAppOrder}
                  className="w-full mt-8 bg-awapuhi-600 hover:bg-awapuhi-700 text-white py-6 rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('processing') : t('completeOrder')}
                </Button>
                
                <p className="mt-4 text-sm text-gray-500 text-center">
                  {t('whatsappNote')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
