const express = require('express');
const router = express.Router();
const { listMessages, sendMessage, markChatRead } = require('../controllers/chats');

router.get('/', listMessages);
router.post('/', sendMessage);
router.put('/:chatId/read', markChatRead);

module.exports = router;
