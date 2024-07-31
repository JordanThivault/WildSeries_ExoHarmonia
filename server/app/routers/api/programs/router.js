const express = require("express");

const router = express.Router();

const { browse } = require('../../../controllers/programAction');


router.get('/programs', browse);

module.exports = router;