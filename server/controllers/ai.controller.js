import model from "../config/geminiConfig.js";

export const getOpenSourceSuggestions = async (req, res) => {
    try {
        if (!req.body || !req.body.interest) {
            return res.status(400).json({
                error: "Interest is required!"
            });
        }

        const interest = req.body.interest;

        if (!interest) {
            return res.this.status(400).json({
                error: "Interest is Required!"
            })
        }

        const prompt = `Suggest 5 beginner-friendly open-source organizations for someone interested in ${interest}. 
        Format your response as a clear list. Include:
        - Organization Name
        - GitHub/Website Link
        - Why it's good for beginners.`

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text()

        res.status(200).json({ success: true, data: text })
    } catch (error) {
        console.log("AI Error:", error);
        res.status(500).json({ success: false, error: "Something went wrong with AI" });
    }
}