import express from "express";
import { getOpenSourceSuggestions } from "../controllers/ai.controller.js";

const router = express.Router();

router.post('/find-os', getOpenSourceSuggestions)

export default router;