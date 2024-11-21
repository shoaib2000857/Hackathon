// app/api/chatbot/route.js
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Load the Gemini API key from environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req) {
  const { message } = await req.json();

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(message);
    const botReply = result.response.text();

    return NextResponse.json({ reply: botReply });
  } catch (error) {
    console.error('Error during Gemini API request:', error.response ? error.response.data : error.message);
    return NextResponse.json({ reply: 'Sorry, something went wrong.' }, { status: 500 });
  }
}