
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-earth-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Our Story</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-serif mb-6">From Costa Rica's Rainforests to Your Home</h3>
            <p className="text-gray-700 mb-4">
              Our journey began in the lush rainforests of Costa Rica, where the wild Awapuhi 
              (shampoo ginger) grows in abundance. For centuries, indigenous communities have
              used this remarkable plant for its natural cleansing and conditioning properties.
            </p>
            <p className="text-gray-700 mb-4">
              Inspired by traditional wisdom and powered by modern science, we've harnessed the
              natural goodness of Awapuhi in its purest form. Our cold-pressing technique ensures
              that all the beneficial enzymes and nutrients remain intact.
            </p>
            <p className="text-gray-700">
              We believe in sustainable harvesting and giving back to the communities that help us
              source our ingredients. For every bottle sold, we contribute to rainforest conservation
              efforts in Costa Rica.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="text-xl font-serif text-awapuhi-700 mb-2">Sustainably Sourced</h4>
                <p className="text-gray-600">
                  We work directly with local farmers to ensure sustainable harvesting practices.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="text-xl font-serif text-awapuhi-700 mb-2">Cold-Pressed</h4>
                <p className="text-gray-600">
                  Our gentle extraction preserves all the natural nutrients and enzymes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="text-xl font-serif text-awapuhi-700 mb-2">No Synthetics</h4>
                <p className="text-gray-600">
                  Free from silicones, sulfates, parabens and other harmful chemicals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="text-xl font-serif text-awapuhi-700 mb-2">Multi-Purpose</h4>
                <p className="text-gray-600">
                  Use as a leave-in conditioner, scalp treatment, or skin tonic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
