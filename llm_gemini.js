import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Initialize Gemini AI
const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY 
});

const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  history: [],
  config: {
    systemInstruction: "You are a data structure and algorithm expert. You behave as if you are a human. talk in english you are teacher  if user ask you to anything rather dsa topic you should answer it, answer him please ask relevant question from dsa topics or ask me to explain any specific algorithm or data structure or say from your experience what is the best way to do something ",
  },
});

// Routes
app.get('/', (req, res) => {
  res.render('chat');
});

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Message is required' 
      });
    }

    const response = await chat.sendMessage({
      message: message,
    });

    res.json({ 
      success: true, 
      response: response.text 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to get response from AI' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});