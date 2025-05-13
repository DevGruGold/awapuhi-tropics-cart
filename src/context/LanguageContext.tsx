
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define translations for both languages
export const translations = {
  en: {
    // Hero section
    heroTitle: "Hawaiian Shampoo",
    heroSubtitle: "Awapuhi – Fresh from the Tropics to Your Hair & Skin",
    heroDescription: "Sourced from Costa Rica's rainforests, our luxurious blend of wild Awapuhi and aloe vera hydrates, nourishes, and revitalizes.",
    discoverButton: "Discover Now",
    
    // Product section
    productTitle: "Hawaiian Shampoo",
    productSubtitle: "Awapuhi",
    productDescription1: "Sourced from the heart of Costa Rica's rainforests, our Hawaiian Shampoo is a luxurious blend of wild Awapuhi (shampoo ginger) and soothing aloe vera.",
    productDescription2: "Cold-pressed for purity, this natural conditioner hydrates, nourishes, and revitalizes both scalp and skin.",
    size: "Size",
    quantity: "Quantity",
    addToCart: "Add to Cart",
    keyBenefits: "Key Benefits",
    
    // Benefits
    benefit1: "Cold-pressed for maximum purity",
    benefit2: "Free from synthetics and silicones",
    benefit3: "Natural plant-based preservatives",
    benefit4: "Works as leave-in conditioner, scalp treatment & skin tonic",
    benefit5: "Refrigerated for peak freshness",
    
    // Awapuhi section
    awapuhiTitle: "The Awapuhi Plant",
    awapuhiDesc1: "The Awapuhi plant (Zingiber zerumbet), commonly known as shampoo ginger, is a tropical flowering plant native to Southeast Asia but now cultivated throughout tropical regions.",
    awapuhiDesc2: "Its striking red pinecone-shaped flower heads contain a clear, slippery liquid that indigenous peoples have used for centuries as a natural hair and body cleanser.",
    awapuhiDesc3: "Rich in saponins that create a natural lather, along with anti-inflammatory and moisturizing compounds, it's nature's perfect beauty ingredient.",
    
    // Cart
    cart: "Your Cart",
    emptyCart: "Your cart is empty",
    continueShopping: "Continue Shopping",
    subtotal: "Subtotal",
    checkout: "Checkout",
    clearCart: "Clear Cart",
    
    // Checkout
    completeOrder: "Complete Order via WhatsApp",
    orderSummary: "Order Summary",
    processing: "Processing...",
    whatsappNote: "Your order details will be sent via WhatsApp for confirmation.",
    
    // Language
    switchToSpanish: "Switch to Spanish",
    switchToEnglish: "Switch to English",
  },
  es: {
    // Hero section
    heroTitle: "Champú Hawaiano",
    heroSubtitle: "Awapuhi – Fresco de los trópicos para tu cabello y piel",
    heroDescription: "Procedente de las selvas de Costa Rica, nuestra lujosa mezcla de Awapuhi silvestre y aloe vera hidrata, nutre y revitaliza.",
    discoverButton: "Descubrir Ahora",
    
    // Product section
    productTitle: "Champú Hawaiano",
    productSubtitle: "Awapuhi",
    productDescription1: "Procedente del corazón de las selvas de Costa Rica, nuestro Champú Hawaiano es una lujosa mezcla de Awapuhi silvestre (jengibre de champú) y calmante aloe vera.",
    productDescription2: "Prensado en frío para mayor pureza, este acondicionador natural hidrata, nutre y revitaliza tanto el cuero cabelludo como la piel.",
    size: "Tamaño",
    quantity: "Cantidad",
    addToCart: "Añadir al Carrito",
    keyBenefits: "Beneficios Principales",
    
    // Benefits
    benefit1: "Prensado en frío para máxima pureza",
    benefit2: "Libre de sintéticos y siliconas",
    benefit3: "Conservantes naturales de origen vegetal",
    benefit4: "Funciona como acondicionador sin enjuague, tratamiento para el cuero cabelludo y tónico para la piel",
    benefit5: "Refrigerado para máxima frescura",
    
    // Awapuhi section
    awapuhiTitle: "La Planta Awapuhi",
    awapuhiDesc1: "La planta Awapuhi (Zingiber zerumbet), comúnmente conocida como jengibre de champú, es una planta tropical originaria del Sudeste Asiático pero ahora cultivada en todas las regiones tropicales.",
    awapuhiDesc2: "Sus llamativas cabezas florales en forma de piña de color rojo contienen un líquido claro y resbaladizo que los pueblos indígenas han utilizado durante siglos como limpiador natural para el cabello y el cuerpo.",
    awapuhiDesc3: "Rico en saponinas que crean una espuma natural, junto con compuestos antiinflamatorios e hidratantes, es el ingrediente perfecto de la naturaleza para la belleza.",
    
    // Cart
    cart: "Tu Carrito",
    emptyCart: "Tu carrito está vacío",
    continueShopping: "Continuar Comprando",
    subtotal: "Subtotal",
    checkout: "Finalizar Compra",
    clearCart: "Vaciar Carrito",
    
    // Checkout
    completeOrder: "Completar Pedido por WhatsApp",
    orderSummary: "Resumen del Pedido",
    processing: "Procesando...",
    whatsappNote: "Los detalles de tu pedido se enviarán por WhatsApp para confirmación.",
    
    // Language
    switchToSpanish: "Cambiar a Español",
    switchToEnglish: "Cambiar a Inglés",
  }
};

type Language = 'en' | 'es';
type TranslationsType = typeof translations;

interface LanguageContextType {
  language: Language;
  t: (key: keyof TranslationsType['en']) => string;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  const t = (key: keyof TranslationsType['en']): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
