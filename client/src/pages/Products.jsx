import { FaRegTrashCan, FaPen } from "react-icons/fa6";  
import { useState, useEffect } from 'react';  
import { fetchProducts, deleteProductById } from '../services/apiProductService.js';  
import { useNavigate } from 'react-router-dom';  

const Products = () => {  
    const [products, setProducts] = useState([]);  
    const [isLoading, setIsLoading] = useState(true);  
    const [showModal, setShowModal] = useState(false);  
    const [selectedProductId, setSelectedProductId] = useState(null);  
    const navigate = useNavigate();  

    useEffect(() => {  
        const loadProducts = async () => {  
            try {  
                const data = await fetchProducts();  
                setProducts(data);  
            } catch (error) {  
                console.error(error.message);  
                alert("Failed to load products");  
            } finally {  
                setIsLoading(false);  
            }  
        };  

        loadProducts();  
    }, []);  

    const openDeleteModal = (id) => {  
        setSelectedProductId(id);  
        setShowModal(true);  
    };  

    const confirmDelete = async () => {  
        try {  
            await deleteProductById(selectedProductId);  
            setProducts(products.filter(product => product.id !== selectedProductId));  
            setShowModal(false);  
            setSelectedProductId(null);  
        } catch (error) {  
            console.error(error.message);  
            alert("Error deleting product");  
        }  
    };  

    const handleEdit = (id) => {  
        navigate(`/edit-product/${id}`);  
    };  

    return (  
        <div className="p-6 bg-gradient-to-b from-green-50 to-green-100 min-h-screen">  
            {isLoading ? (  
                <div className="flex justify-center items-center h-screen">  
                    <div className="loader"></div>  
                </div>  
            ) : (  
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>  
                    {products.map(product => (  
                        <div   
                            key={product.id}   
                            className='bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl relative p-4 border border-lime-500'  
                        >  
                            <div>  
                                <img  
                                    src={product.image || 'https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-12.png'}  
                                  
                                    alt={product.name}  
                                    className="w-full h-48 object-cover mb-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"  
                                />  
                                <h5 className='font-bold text-lime-800 mb-2'>{product.name}</h5>  
                                <p className='font-semibold text-lime-700 text-sm mb-4'>{product.description}</p>  
                            </div>  
                            <div className='flex items-center justify-between mt-4'>  
                                <p className='font-bold text-xl text-lime-600'>{product.price} RON</p>  
                                <div className="flex space-x-2">  
                                    <FaPen   
                                        className='text-blue-600 cursor-pointer hover:text-blue-700 transition duration-300'  
                                        onClick={() => handleEdit(product.id)}  
                                    />  
                                    <FaRegTrashCan   
                                        className='text-red-600 cursor-pointer hover:text-red-700 transition duration-300'   
                                        onClick={() => openDeleteModal(product.id)}  
                                    />  
                                </div>  
                            </div>  
                        </div>  
                    ))}  
                </div>  
            )}  

            {showModal && (  
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">  
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 transition-transform transform duration-300 hover:scale-105">  
                        <h3 className="text-lg font-bold mb-4 text-center text-lime-700">Confirm Delete</h3>  
                        <p className="mb-4 text-center">Ești sigur că vrei să ștergi acest produs?</p>  
                        <div className="mt-4 flex justify-between">  
                            <button   
                                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"  
                                onClick={() => setShowModal(false)}  
                            >  
                                Nu  
                            </button>  
                            <button   
                                className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"  
                                onClick={confirmDelete}  
                            >  
                                Da  
                            </button>  
                        </div>  
                    </div>  
                </div>  
            )}  
        </div>  
    );  
};  

export default Products;  