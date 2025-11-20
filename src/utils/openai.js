import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function explainCodeWithAI(code, language) {
  try {
    const prompt = `Explain the following ${language} code in simple, step-by-step language:\n\n${code}`;

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "You are an expert code explainer." },
        { role: "user", content: prompt },
      ],
      temperature: 0.3,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("AI Error:", error);
    return "⚠️ Error: Unable to generate explanation.";
  }
}
