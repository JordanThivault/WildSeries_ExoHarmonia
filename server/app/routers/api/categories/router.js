const express = require("express");

const router = express.Router();

const { list, find } = require('../../../controllers/categoryActions');


router.get('/', list);
router.get('/:id', find);

module.exports = router;