const envBaseUrl = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = (envBaseUrl || "http://localhost:5000").replace(/\/+$/, "");

export const API_PRODUCT_URL = `${API_BASE_URL}/api/product`;
