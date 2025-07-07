const Question = require('../models/Question');
const Session = require('../models/Sessions');

// @desc  Add additional questions to an existing session
// @route POST /api/questions/add
// @access Private
exports.addQuestionsToSession = async (req, res) => {
    try {
    } catch (error) {
        res.status(500).json({message: "Server Error "});
    }
};

// @desc  Pin or unpin a question
// @route POST /api/questions/:id/pin
// @access Private
exports.togglePinQuestion = async (req, res) => {};

// @desc  Update a note for a question
// @route POST /api/questions/:id/note
// @access Private
exports.updateQuestionNote = async (req, res) => {};
