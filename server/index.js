import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/gemini", (req, res) => {
  // Access API key using process.env
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Gemini API key is missing. Please check your .env file." });
  }

  // Use it in Gemini API request URL
  const requestUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

  // Returning the constructed URL for demonstration purposes.
  // In a real scenario, you'd use fetch() or axios to call the Gemini API here.
  res.json({
    success: true,
    message: "URL configured successfully",
    url: requestUrl
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
