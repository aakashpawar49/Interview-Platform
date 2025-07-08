const { GoogleGenAI } = require("@google/genai");
const { conceptExplainPrompt } = require("../utils/prompts");

const ai = new GoogleGenAI({ apiKey: process.env.GoogleGenAI });

// @desc   Generate interview questions and answers using Gemini 
// @route  POST /api/ai/generate-questions
// @access Private
const generateInterviewQuestions = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({
            message: "Failed to generate questions",
            error: error.message,
        });
    }
};

// @desc   Generate explains an interview question 
// @route  POST /api/ai/generate-explanation
// @access Private
const generateConceptExplanation = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({
            message: "Failed to generate questions",
            error: error.message,
        });
    }
};

module.exports = { generateInterviewQuestions, generateConceptExplanation };