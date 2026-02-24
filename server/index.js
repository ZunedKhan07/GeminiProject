import dotenv from "dotenv";
import express from "express";
import cors from 'cors';

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

import aiRoutes from "./routes/ai.routes.js";
app.use('/api', aiRoutes)
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`\n 🚀 Server running on http://localhost:${port}`);
});