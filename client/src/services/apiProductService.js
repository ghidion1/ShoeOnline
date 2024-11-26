const API_BASE_URL = "http://localhost:8888/products";

// Funcție pentru a obține toate produsele
export const fetchProducts = async () => {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
};

// Funcție pentru a șterge un produs după ID
export const deleteProductById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete product");
    }
    return response.json();
};

// Funcție pentru a crea un produs
export const createProduct = async (product) => {
    const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
    }
    return response.json();
};

// Funcție pentru a obține detalii despre un produs după ID
export const fetchProductById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch product with id ${id}`);
    }
    return response.json();
};

// Funcție pentru a actualiza un produs existent
export const updateProductById = async (id, productData) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
    });
    if (!response.ok) {
        throw new Error(`Failed to update product with id ${id}`);
    }
    return response.json();
};
