
import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { BENEFITS } from "../data/benefits";
import ProductCard from "../components/ProductCard";
import Hero  from "../assets/images/HERO SECTION.png"
const HomePage = ({ onAddToCart, setActiveLink }) => {
   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <img 
                src={Hero} 
                alt="Beautiful women wearing natural wigs"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                Your Natural Beauty, Enhanced
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover our curated collection of premium natural wigs. Handcrafted for elegance, designed for confidence.
              </p>
              <button 
                onClick={() => setActiveLink('Shop')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
              >
                Shop Wigs <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.featured).map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} featured />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Wigs in Action</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PRODUCTS.slice(0, 4).map((product, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
