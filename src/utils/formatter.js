// src/utils/formatter.js

export function formatExplanation(text = "") {
  return text
    // Convert **bold titles** into markdown headings
    .replace(/\*\*(.*?)\*\*/g, '### $1')

    // Convert Step-by-Step into a bigger heading
    .replace(/Step-by-Step Breakdown:/g, '## Step-by-Step Breakdown')

    // Fix code block spacing
    .replace(/```/g, '\n```')

    // Convert - bullets → • bullets
    .replace(/\n-\s/g, '\n• ')

    // Add spacing before paragraphs starting with “Word:”
    .replace(/\n(?=[A-Z][a-z]+:)/g, '\n\n');
}
