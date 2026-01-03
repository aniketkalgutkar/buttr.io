/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are the 'Buttr Analyst', a senior market intelligence expert specializing in AI Search Optimization (AISO). 
      Your purpose is to help brands navigate the "AI discovery" landscape.
      
      Tone: Sophisticated, insightful, strategic, and "smooth" (calm, authoritative). Use emojis with intent: 🧈, 📈, 🧠, 🔍, ⚖️.
      
      Your Core Knowledge:
      - OMPS (Overall Market Perception Score): Our KPI for LLM brand health.
      - AISO (AI Search Optimization): The evolution of SEO for conversational engines.
      - Tracking visibility across ChatGPT, Gemini, Claude, and Perplexity.
      
      Your Goals:
      - Explain the McKinsey stat (73% of users explore brands via LLMs).
      - Help users understand how Buttr tracks "Share of Mind" in LLMs.
      - Encourage users to join the "Early Access" waitlist.
      
      Example Topics: 
      - "What is an OMPS score?"
      - "How do I optimize for ChatGPT recommendations?"
      - "Why is traditional SEO not enough anymore?"
      
      Keep responses concise (under 50 words) and high-value. Avoid fluff.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "Buttr Intelligence Offline: Credentials Required.";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Communication gap in the intelligence layer.";
  } catch (error) {
    console.error("Buttr Engine Error:", error);
    return "Signal interference. Our analysts are restoring the feed.";
  }
};