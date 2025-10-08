const express = require('express');
const Alert = require('../models/alert.model');
const router = express.Router();

// POST /api/alerts - Creates a new alert
// This endpoint will be called by your n8n workflow
router.post('/', async (req, res) => {
  try {
    // Basic security: check for a secret header
    const secret = req.header('X-N8N-SECRET');

    if (secret !== process.env.N8N_SECRET_TOKEN) {
      return res.status(401).send('Unauthorized');
    }

    const { title, link, category, source } = req.body;

    console.log(title," , ", link);

    if (!title || !link || !category) {
      return res.status(400).send('Missing required fields');
    }

    const newAlert = new Alert({ title, link, category, source });
    await newAlert.save();
    res.status(201).send(newAlert);

  } catch (error) {
    console.error('error creating alert:',error);
    res.status(500).send({ message: 'Error creating alert', error:error.message });
  }
});

module.exports = router;