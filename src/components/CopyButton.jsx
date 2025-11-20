import { useState } from "react";

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);

    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button
      onClick={handleCopy}
      disabled={!textToCopy}
      className={`px-5 py-2 rounded-lg border border-[#2a3550] text-gray-300 transition 
        ${textToCopy ? "hover:bg-[#1c2333]" : "opacity-40 cursor-not-allowed"}
      `}
    >
      {copied ? "✔ Copied!" : "📋 Copy Output"}
    </button>
  );
};

export default CopyButton;
