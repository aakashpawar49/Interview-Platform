const Session = require('../models/Sessions');
const Question = require('../models/Question');

// @desc Create a new session and linked questions
// @route POST/api/sessions/create
// @access Private
exports.createSession = async (req, res) => {
    try {
        const { role, experience, topicsToFocus, description, questions } = 
            req.body;
        const userId = req.user._id; // Assuming you have a middleware setting req.user

        const session = await Session.create({
            user: userId,
            role,
            experience,
            topicsToFocus,
            description,
        });

        const questionDocs = await Promise.all(
            questions.map(async (q) => {
                const question = await Question.create({
                    session: session._id,
                    question: q.question,
                    answer: q.answer,
                });
                return question._id;
            })
        );

        session.questions = questionDocs;
        await session.save();
        
        res.status(201).json({ success: true, session });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error "});
    }
};

// @desc GET all sessions for the logged-in user
// @route GET/api/sessions/my-sessions
// @access Private
exports.getMySessions = async (req, res) => {
    try {
        const userId = req.user._id;
        const sessions = await Session.find({ user: userId });
        res.status(200).json({ success: true, sessions });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error: " + error.message });
    }
};

// @desc  GET a session by ID with populated questions
// @route GET api/sessions/:id
// @access Private
exports.getSessionById = async (req, res) => {
    try {
        const sessionId = req.params.id;
        if (!sessionId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ success: false, message: "Invalid session ID" });
        }
        const session = await Session.findById(sessionId).populate('questions');
        if (!session) {
            return res.status(404).json({ success: false, message: "Session not found" });
        }
        res.status(200).json({ success: true, session });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error: " + error.message });
    }
};

// @desc  DELETE a session and its questions
// @route DELETE /api/sessions/:id
// @access Private
exports.deleteSession = async (req, res) => {
    try {
        const sessionId = req.params.id;
        if (!sessionId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ success: false, message: "Invalid session ID" });
        }
        const session = await Session.findById(sessionId);
        if (!session) {
            return res.status(404).json({ success: false, message: "Session not found" });
        }
        // Delete all questions linked to this session
        await Question.deleteMany({ session: sessionId });
        // Delete the session
        await session.remove();
        res.status(200).json({ success: true, message: "Session and linked questions deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error: " + error.message });
    }
};
