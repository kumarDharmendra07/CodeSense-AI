export default function detectLanguage(code = "") {
  const s = code.trim();
  if (!s) return "javascript";

  // C++
  if (
    /#include\s*<.*>/i.test(s) ||
    /std::/i.test(s) ||
    /cout\s*<</i.test(s) ||
    /int\s+main\s*\(/i.test(s)
  ) {
    return "cpp";
  }

  // Python
  if (
    /^def\s+\w+\(/m.test(s) ||
    /^import\s+\w+/m.test(s) ||
    /print\s*\(/.test(s)
  ) {
    return "python";
  }

  // Java
  if (
    /public\s+class\s+\w+/i.test(s) ||
    /System\.out\.println/.test(s)
  ) {
    return "java";
  }

  // HTML
  if (/^\s*<\w+.*>/m.test(s)) {
    return "html";
  }

  // JavaScript
  if (
    /\bconsole\.log/.test(s) ||
    /\bfunction\b/.test(s) ||
    /=\>\s*{/.test(s)
  ) {
    return "javascript";
  }

  return "javascript";
}
