import React from 'react';  
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';  

const Footer = () => {  
  const date = new Date();  
  const year = date.getFullYear();  

  return (  
    <footer className="bg-gradient-to-r from-lime-600 to-lime-700 text-white py-8 px-6 rounded-tl-xl rounded-tr-xl shadow-md mt-12 relative overflow-hidden">  
      <div className="absolute inset-0 bg-lime-800 opacity-30 z-0"></div>  
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between z-10 relative">  
        
        {/* Text și copyright */}  
        <div className="text-center md:text-left mb-6 md:mb-0">  
          <p className="text-sm font-medium text-lime-100">© {year} BrandName. All rights reserved.</p>  
        </div>  

        {/* Link-uri suplimentare */}  
        <div className="flex space-x-6 mt-4 md:mt-0">  
          <a href="/about-us" className="hover:text-lime-300 transition duration-300 text-sm">About Us</a>  
          <a href="/terms" className="hover:text-lime-300 transition duration-300 text-sm">Terms & Conditions</a>  
          <a href="/privacy" className="hover:text-lime-300 transition duration-300 text-sm">Privacy Policy</a>  
        </div>  
        
        {/* Iconițe social media */}  
        <div className="flex space-x-4 mt-4 md:mt-0">  
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-300 transition-all duration-300">  
            <FaFacebook className="text-2xl hover:scale-110 transform transition duration-300" />  
          </a>  
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-300 transition-all duration-300">  
            <FaTwitter className="text-2xl hover:scale-110 transform transition duration-300" />  
          </a>  
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-300 transition-all duration-300">  
            <FaInstagram className="text-2xl hover:scale-110 transform transition duration-300" />  
          </a>  
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-300 transition-all duration-300">  
            <FaLinkedin className="text-2xl hover:scale-110 transform transition duration-300" />  
          </a>  
        </div>  
      </div>  

      {/* Linie separator */}  
      <div className="border-t border-lime-300 my-4"></div>  

      {/* Mesajul de informare */}  
      <div className="text-center text-lime-100 mt-4 text-sm">  
        <p>Follow us for the latest updates and promotions!</p>  
      </div>  
      
      {/* Efect de fundal animat */}  
      <style jsx>{`  
        @keyframes pulse {  
          0% {  
            transform: scale(1);  
          }  
          50% {  
            transform: scale(1.05);  
          }  
          100% {  
            transform: scale(1);  
          }  
        }  
        
        .icon:hover {  
          animation: pulse 1s infinite;  
        }  
      `}</style>  
    </footer>  
  );  
};  

export default Footer;