// app/api/recommendations/route.js
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { resources } from '/lib/resources';

// Load the Gemini API key from environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req) {
  const { query, subject } = await req.json();

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const subjectDescription = resources[subject]?.description || "";
    const context = `Explain the topic "${query}" in the subject "${subjectDescription}". Provide a list of relevant study materials.`;

    const result = await model.generateContent(context);
    const explanation = result.response.text().split('\n')[0];
    const recommendations = resources[subject]?.topics[query] || [];

    return NextResponse.json({ explanation, recommendations }, { status: 200 });
  } catch (error) {
    console.error('Error during Gemini API request:', error.response ? error.response.data : error.message);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}