const express = require('express');
const { createSession, getSessionById, getMySessions, deleteSession } = require('../controllers/sessionController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', protect, createSession);
router.get('/my-sessions', protect, getMySessions);
router.get('/sessions/:id', protect, getSessionById);
router.delete('/sessions/:id', protect, deleteSession);

module.exports = router;
