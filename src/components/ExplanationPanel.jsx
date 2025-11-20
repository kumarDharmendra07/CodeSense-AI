import React from "react";
import Loader from "./Loader";
import EmptyState from "./EmptyState";
import CopyButton from "./CopyButton";
import PdfDownloadButton from "./PdfDownloadButton";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";


const ExplanationPanel = ({
  explanation,
  loading,
  onCopy,
  onDownload,
}) => {
  return (
    <div className="bg-[#0F1129] border border-[#1f2a40] rounded-xl p-5 flex flex-col w-full">

      {/* Header */}
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        📄 AI Explanation
      </h2>

      {/* Explanation box */}
      <div className="flex-1 bg-[#0c1120] border border-[#1a2338] rounded-lg p-6 text-gray-300 overflow-auto">

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center gap-3 opacity-80">
            <Loader />
            <p className="text-gray-400">Generating explanation...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !explanation && <EmptyState />}

        {/* Explanation Output */}
        {!loading && explanation && (
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {explanation}
            </ReactMarkdown>
          </div>

        )}

      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <CopyButton textToCopy={explanation} />

        <PdfDownloadButton
          explanation={explanation}
          onDownload={onDownload} />
      </div>

    </div>
  );
};

export default ExplanationPanel;
