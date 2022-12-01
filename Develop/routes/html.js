const express = require('express');
const router = express.Router();
const path = require('path');

// /notes GET route
router.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// wildcard GET route
router.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;