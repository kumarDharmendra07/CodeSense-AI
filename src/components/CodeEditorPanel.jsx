import React from "react";
import CodeEditor from "./CodeEditor";

const CodeEditorPanel = ({
  code,
  setCode,
  onExplain,
  onClear,
  language,
  setLanguage,
}) => {
  return (
    <div className="bg-[#0F1129] border border-[#1f2a40] rounded-xl p-5 flex flex-col w-full">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Code Input</h2>

        {/* Language Selector */}
        {/* <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-[#1c2333] text-gray-300 px-3 py-1 rounded-lg border border-[#2a3550] focus:outline-none"
        >
          <option>JavaScript</option>
          <option>Python</option>
          <option>C++</option>
          <option>Java</option>
        </select> */}
      </div>

      {/* Code Input Box */}
      <CodeEditor
        code={code}
        setCode={setCode}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          onClick={onExplain}
          className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
        >
          ⚡ Explain Code
        </button>

        <button
          onClick={onClear}
          className="flex items-center gap-2 bg-[#1c2333] hover:bg-[#232c44] text-gray-300 px-5 py-2 rounded-lg transition"
        >
          🧹 Clear
        </button>
      </div>
    </div>
  );
};

export default CodeEditorPanel;
