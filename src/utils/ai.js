// import DeepSeek from "deepseek";
// import { DeepSeek } from "deepseek";
// import { ChatClient } from "deepseek";



// export async function explainCodeWithAI(code, language) {
//   try {
//     const prompt = `Explain the following ${language} code in a simple step-by-step way:\n\n${code}`;

//     const response = await fetch("https://api.deepseek.com/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "deepseek-reasoner",
//         messages: [
//           {
//             role: "system",
//             content: "You are an expert programmer and AI code explainer.",
//           },
//           {
//             role: "user",
//             content: prompt,
//           }
//         ],
//       }),
//     });

//     const data = await response.json();

//     if (!data.choices) {
//       return "⚠️ Error: Invalid response from DeepSeek.";
//     }

//     return data.choices[0].message.content;

//   } catch (error) {
//     console.error("DeepSeek Error:", error);
//     return "⚠️ Error: Unable to generate explanation.";
//   }
// }



export async function explainCodeWithAI(code, language) {
  try {
    const prompt = `Explain the following ${language} code in a simple, clear, step-by-step way:\n\n${code}`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",   // 💥 NEW FREE MODEL
        messages: [
          {
            role: "system",
            content: "You are an expert senior developer who explains code clearly."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.2,
      }),
    });

    const data = await response.json();

    console.log("Groq API Response:", data);

    if (!data?.choices?.[0]?.message?.content) {
      return "⚠️ Error: Invalid response from Groq API.";
    }

    return data.choices[0].message.content;

  } catch (error) {
    console.error("Groq Error:", error);
    return "⚠️ Error: Unable to generate explanation.";
  }
}
