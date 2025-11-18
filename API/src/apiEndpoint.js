const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("API is live");
});

router.post("/api/transform", (req, res) => {
  const { sentence } = req.body;

  if (!sentence || sentence.trim() === "") {
    res.status(400).json({ message: "Sentence is required" });
  }

  //Spliting sentence into words and storing in array
  const arr = sentence.trim().split(" ");

  // Words Count
  const word_count = arr.length;

  // Unique_Words
  const unique_words = [...new Set(arr)];

  // Reversed Sentence
  const reversed_sentence = arr.reverse().join(" ");
  res.json({ word_count, unique_words, reversed_sentence });
});

module.exports = router;
