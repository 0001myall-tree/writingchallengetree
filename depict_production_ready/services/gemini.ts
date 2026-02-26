import { GoogleGenAI } from "@google/genai";

export async function generateResultImage(prompt: string): Promise<string | null> {
  // Use process.env.API_KEY directly in the named parameter object as per SDK guidelines.
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `${prompt}. High quality illustration, elegant aesthetic, warm cream and orange color palette, minimalist artistic style, no text in image.`,
          },
        ],
      },
    });

    // Iterate through candidates and parts to find the inlineData image part, as it may not be first.
    if (response.candidates && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString: string = part.inlineData.data;
          return `data:image/png;base64,${base64EncodeString}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
}