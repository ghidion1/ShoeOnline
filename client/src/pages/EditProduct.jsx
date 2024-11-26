import { useState, useEffect } from 'react';  
import { useNavigate, useParams } from 'react-router-dom';  
import { fetchProductById, updateProductById } from '../services/apiProductService.js';  

const EditProduct = () => {  
    const { id } = useParams();  
    const [product, setProduct] = useState({ name: '', description: '', price: '' });  
    const navigate = useNavigate();  

    useEffect(() => {  
        const loadProduct = async () => {  
            try {  
                const data = await fetchProductById(id);  
                setProduct(data);  
            } catch (error) {  
                console.error(error.message);  
                alert("Failed to load product");  
            }  
        };  

        loadProduct();  
    }, [id]);  

    const handleSubmit = async (e) => {  
        e.preventDefault();  
        try {  
            await updateProductById(id, product);  
            navigate('/products');  
        } catch (error) {  
            console.error(error.message);  
            alert("Error updating product");  
        }  
    };  

    const handleChange = (e) => {  
        setProduct({ ...product, [e.target.name]: e.target.value });  
    };  

    return (  
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 via-yellow-400 to-red-500">  
            <div className="bg-white shadow-lg rounded-xl p-8 w-96 transform transition-all duration-500 hover:scale-105">  
                <form onSubmit={handleSubmit} className="space-y-6">  
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Edit Product</h2>  
                    <div className="relative">  
                        <input  
                            type="text"  
                            name="name"  
                            value={product.name}  
                            onChange={handleChange}  
                            className="w-full p-4 border-b-2 border-gray-300 rounded-lg bg-transparent focus:outline-none focus:border-green-500 transition duration-200 shadow-sm"  
                            placeholder="Product Name"  
                        />  
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">  
                            <i className="fas fa-box-open"></i>  
                        </span>  
                    </div>  
                    <div className="relative">  
                        <input  
                            type="text"  
                            name="description"  
                            value={product.description}  
                            onChange={handleChange}  
                            className="w-full p-4 border-b-2 border-gray-300 rounded-lg bg-transparent focus:outline-none focus:border-yellow-500 transition duration-200 shadow-sm"  
                            placeholder="Product Description"  
                        />  
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">  
                            <i className="fas fa-pencil-alt"></i>  
                        </span>  
                    </div>  
                    <div className="relative">  
                        <input  
                            type="number"  
                            name="price"  
                            value={product.price}  
                            onChange={handleChange}  
                            className="w-full p-4 border-b-2 border-gray-300 rounded-lg bg-transparent focus:outline-none focus:border-red-500 transition duration-200 shadow-sm"  
                            placeholder="Price"  
                        />  
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">  
                            <i className="fas fa-dollar-sign"></i>  
                        </span>  
                    </div>  
                    <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">  
                        Save Changes  
                    </button>  
                </form>  
            </div>  
        </div>  
    );  
};  

export default EditProduct;