import React, { useState } from "react";  
import { useNavigate } from "react-router-dom";  
import { createProduct } from "../services/apiProductService.js";  

const NewProduct = () => {  
  const [name, setName] = useState("");  
  const [description, setDescription] = useState("");  
  const [price, setPrice] = useState("");  
  const [loading, setLoading] = useState(false);  

  const navigate = useNavigate();  

  const saveProduct = async (e) => {  
    e.preventDefault();  
    setLoading(true);  
    if (!name || !description || !price) {  
      alert("Please fill all fields correctly.");  
      setLoading(false);  
      return;  
    }  
    //Nothin justt a try
    try {  
      await createProduct({ name, description, price });  
      navigate("/products");  
      setName("");  
      setDescription("");  
      setPrice("");  
    } catch (error) {  
      alert(error.message);  
    } finally {  
      setLoading(false);  
    }  
  };  

  return (  
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-400 via-yellow-400 to-red-500">  
      <form  
        onSubmit={saveProduct}  
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105"  
      >  
        <h5 className="text-3xl font-extrabold text-center text-gray-800 mb-8">  
          Add New Product  
        </h5>  
        
        <div className="mb-6 relative">  
          <label  
            htmlFor="name"  
            className="block text-lg font-medium text-gray-700 mb-2"  
          >  
            Name  
          </label>  
          <input  
            type="text"  
            name="name"  
            id="name"  
            placeholder="Product Name"  
            className="bg-gray-50 w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200 shadow-sm"  
            value={name}  
            onChange={(e) => setName(e.target.value)}  
          />  
          <span className="absolute top-3 left-2 text-gray-400">  
            <i className="fas fa-box-open"></i>  
          </span>  
        </div>  

        <div className="mb-6 relative">  
          <label  
            htmlFor="description"  
            className="block text-lg font-medium text-gray-700 mb-2"  
          >  
            Description  
          </label>  
          <input  
            type="text"  
            name="description"  
            id="description"  
            placeholder="Product Description"  
            className="bg-gray-50 w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition duration-200 shadow-sm"  
            value={description}  
            onChange={(e) => setDescription(e.target.value)}  
          />  
          <span className="absolute top-3 left-2 text-gray-400">  
            <i className="fas fa-pencil-alt"></i>  
          </span>  
        </div>  

        <div className="mb-6 relative">  
          <label  
            htmlFor="price"  
            className="block text-lg font-medium text-gray-700 mb-2"  
          >  
            Price  
          </label>  
          <input  
            type="number"  
            min="0"  
            name="price"  
            id="price"  
            placeholder="Price"  
            className="bg-gray-50 w-full p-4 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition duration-200 shadow-sm"  
            value={price}  
            onChange={(e) => setPrice(e.target.value)}  
          />  
          <span className="absolute top-3 left-2 text-gray-400">  
            <i className="fas fa-dollar-sign"></i>  
          </span>  
        </div>  

        <button  
          type="submit"  
          className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white py-3 rounded-lg font-bold shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"  
          disabled={loading}  
        >  
          {loading ? "Saving..." : "Save Product"}  
        </button>  
      </form>  
    </div>  
  );  
};  

export default NewProduct;  