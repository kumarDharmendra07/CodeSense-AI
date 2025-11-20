// src/components/CodeEditor.jsx
import React, { useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { html } from "@codemirror/lang-html";
import { markdown } from "@codemirror/lang-markdown";
import detectLanguage from "../utils/languageDetect";

import {
  autocompletion,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap
} from "@codemirror/autocomplete";

import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import { bracketMatching } from "@codemirror/language";
import { keymap } from "@codemirror/view";


const langMap = {
  javascript: javascript,
  python: python,
  cpp: cpp,
  java: java,
  html: html,
  markdown: markdown,
};

export default function CodeEditor({ code, setCode, language, setLanguage }) {

// Determine extensions based on selected language
  const getExtensions = () => {
    const activeLang =
    language === "auto" ? detectLanguage(code) : language;

  const selectedLang = langMap[activeLang] || javascript;

  return [
    selectedLang(),                // correct language extension
    autocompletion(),              
    closeBrackets(),               
    bracketMatching(),             
    history(),                     

    // Keymaps MUST be wrapped inside "keymap.of"
    keymap.of([
      ...closeBracketsKeymap,
      ...completionKeymap,
      ...defaultKeymap,
      ...historyKeymap,
    ]),
  ];
  };

  return (
    <div className="bg-[#0c1120] border border-[#1a2338] rounded-lg p-2">
      <div className="flex justify-between items-center mb-2 text-gray-300">
        <span>Detected: {language === "auto" ? detectLanguage(code) : language}</span>


        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-[#0f1724] px-2 py-1 rounded"
        >
          <option value="auto">Auto Detect</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="html">HTML</option>
        </select>
      </div>

      <CodeMirror
        value={code}
        height="360px"
        theme="dark"
        extensions={getExtensions()}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
}
