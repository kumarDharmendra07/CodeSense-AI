import { useState } from "react";
import NavBar from "../components/NavBar";
import CodeEditorPanel from "../components/CodeEditorPanel";
import ExplanationPanel from "../components/ExplanationPanel";
// import { explainCodeWithAI } from "../utils/openai";
import { explainCodeWithAI } from "../utils/ai";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { formatExplanation } from "../utils/formatter";




export default function CodeApp() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("auto");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Explain Code Handler
  //   const handleExplain = async () => {
  //   if (!code.trim()) return;

  //   setLoading(true);
  //   setExplanation("");

  //   const result = await explainCodeWithAI(code, language);

  //   setExplanation(result);
  //   setLoading(false);
  // };
  const handleExplain = async () => {
    if (!code.trim()) {
      setExplanation("⚠️ Please enter some code.");
      return;
    }

    setLoading(true);

    const result = await explainCodeWithAI(code, language);
    setExplanation(formatExplanation(result));

    setLoading(false);
  };

  // 🔹 Copy Output
  const handleCopy = () => {
    navigator.clipboard.writeText(explanation);
  };

  // 🔹 Download PDF (will add later)
  const handleDownloadPDF = () => {
    const doc = new jsPDF({
    unit: "pt",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 40;

  // Title
  doc.setFontSize(18);
  doc.text("AI Code Explanation", margin, 50);

  // Body (auto multi-page)
  autoTable(doc, {
    startY: 80,
    margin: { left: margin, right: margin },
    body: [
      [
        {
          content: explanation,
          styles: {
            fontSize: 12,
            cellPadding: 8,
            overflow: "linebreak",
            valign: "top",
          }
        }
      ]
    ],
    theme: "plain",
  });

  doc.save("code-explanation.pdf");
  };

  return (
    <div className="min-h-screen bg-[#0F1129] text-white p-6 pt-0">
      <NavBar />

      <h1 className="text-3xl font-bold mt-6 mb-6" >CodeSense AI – Code Explainer</h1>

      {/* 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left Panel */}
        <CodeEditorPanel
          code={code}
          setCode={setCode}
          onExplain={handleExplain}
          onClear={() => setCode("")}
          language={language}
          setLanguage={setLanguage}
        />

        {/* Right Panel */}
        <ExplanationPanel
          explanation={explanation}
          loading={loading}
          onCopy={handleCopy}
          onDownload={handleDownloadPDF}
        />

      </div>
    </div>
  );
}
