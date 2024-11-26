import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-lime-600 via-lime-700 to-green-800 text-white h-auto flex flex-col items-center justify-center text-center py-16 px-8 sm:px-16">
      {/* Titlul principal */}
      <h2 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-wide text-lime-200 drop-shadow-lg">
        The Best Online Shop from Cahul
      </h2>

      {/* Descrierea */}
      <p className="text-lg sm:text-2xl mt-6 sm:mt-8 text-lime-100 max-w-3xl leading-relaxed">
        Discover the most unique and eco-friendly products, tailored to your needs!
      </p>

      <Link
  to="/products"  // Schimbă href cu to și adaugă ruta dorită
  className="mt-8 bg-lime-500 text-white py-4 px-12 rounded-full text-lg sm:text-xl font-semibold shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-lime-300"
>
  Shop Now
</Link>
      {/* Carusel de imagini */}
      <div className="mt-16 w-full max-w-5xl overflow-hidden">
        <div className="flex space-x-6 overflow-x-auto no-scrollbar">
          <img
            src="https://file.aiquickdraw.com/imgcompressed/img/compressed_f8769206cd169f1edea6929c085e5cc1.webp"
            alt="Fresh Fruits"
            className="w-96 h-64 object-cover rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
          />
          <img
            src="https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com_.png"
            alt="Eco Clothing"
            className="w-96 h-64 object-cover rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
          />
          <img
            src="https://www.effectiveecommerce.com/wp-content/uploads/2020/02/nike-shoe-png-nike-shoes-transparent-png-1464-978x1024.png"
            alt="Natural Beauty"
            className="w-96 h-64 object-cover rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl"
          />
        </div>
      </div>

      {/* Secțiune beneficii */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-lime-100">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-12.png"
            alt="Fast Delivery"
            className="w-24 h-24 object-contain mb-6"
          />
          <h3 className="text-2xl font-semibold mb-3">Lightning-Fast Delivery</h3>
          <p className="text-md">Get your eco-friendly goods faster than ever before.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="https://png.pngtree.com/png-vector/20231230/ourmid/pngtree-dropshipping-men-hole-sole-jogging-shoes-png-image_11389148.png"
            alt="Exclusive Discounts"
            className="w-24 h-24 object-contain mb-6"
          />
          <h3 className="text-2xl font-semibold mb-3">Exclusive Discounts</h3>
          <p className="text-md">Save big on the products you love.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/030/761/291/non_2x/modern-sport-sneakers-blue-color-ai-generative-free-png.png"
            alt="Top-Quality Products"
            className="w-24 h-24 object-contain mb-6"
          />
          <h3 className="text-2xl font-semibold mb-3">Unmatched Quality</h3>
          <p className="text-md">Each product is handpicked for excellence.</p>
        </div>
      </div>

      {/* Buton suplimentar */}
      <a
        href="#explore-more"
        className="mt-12 bg-transparent border-2 border-lime-500 text-lime-400 py-3 px-10 rounded-full text-lg sm:text-xl font-semibold transform transition duration-300 hover:bg-lime-500 hover:text-white hover:scale-105 focus:outline-none focus:ring-4 focus:ring-lime-300"
      >
        Explore More
      </a>
    </section>
  );
};

export default CTA;
