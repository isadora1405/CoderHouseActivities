const express = require('express');

const router = express.Router();

const pets = [];

router.get('/', (req, res) => {

    res.json(pets);

});

router.post('/', (req, res) => {

    const pet = req.body;

    pets.push(pet);

    res.status(201).json(pet);

});

module.exports = router;