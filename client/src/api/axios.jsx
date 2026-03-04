import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export const fetchOSSuggestions = async (interest) => {
    try {
        const response = await API.post('/find-os', {interest});
        return response.data;
    } catch (error) {
        console.error("API Call Error:", error.response?.data || error.message);
        throw error; // Isse hum App.jsx mein handle kar payenge
    }
}