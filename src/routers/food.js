const express = require("express");
const Food = require("../models/food");
const router = new express.Router();

router.get("/foods", async (req, res) => {
  try {
    const foods = await Food.find({});
    res.json({ foods });
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
