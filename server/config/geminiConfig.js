import { GoogleGenerativeAI } from "@google/generative-ai";

const configureGemini = () => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    console.log("Key Loaded:", process.env.GEMINI_API_KEY ? "Yes" : "No");
    return genAI.getGenerativeModel({
        model: "gemini-3-flash-preview"
    });
}
const model = configureGemini();

export default model