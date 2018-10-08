const express = require('express');
const router = express.Router();

// some page of auth
router.get('/', (req, res, next) => {
    res.send('here should be auth');
});

module.exports = router;
