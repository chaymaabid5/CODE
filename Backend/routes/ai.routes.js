const express = require('express');
const router = express.Router();
const { generateBusinessPlan } = require('../controllers/ai.controllers');

// Define a route handler for generating a business plan
router.post('/idea', generateBusinessPlan);

module.exports = router;
