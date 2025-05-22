const express = require('express');
const router = express.Router();
const { summarizeTodos } = require('../controllers/summarizeController');

router.post('/summarize', summarizeTodos);

module.exports = router;
