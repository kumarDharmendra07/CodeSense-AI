import jsPDF from "jspdf";

const PdfDownloadButton = ({ explanation }) => {
    const handleDownloadPDF = () => {
        if (!explanation) return;

        const doc = new jsPDF({
            unit: "pt",
            format: "a4",
        });

        doc.setFont("Helvetica", "normal");
        doc.setFontSize(12);

        const text = explanation;
        const margin = 40;
        const maxWidth = 515; // A4 page width minus margins

        doc.text("AI Code Explanation", margin, 40);
        doc.text(text, margin, 70, { maxWidth });

        doc.save("explanation.pdf");
    };

    return (
        <button
            onClick={handleDownloadPDF}
            disabled={!explanation.trim()}
            className={`px-5 py-2 rounded-lg border border-[#2a3550] transition 
    ${explanation.trim()
                    ? "text-white hover:bg-[#1c2333] cursor-pointer"
                    : "text-gray-500 opacity-40 cursor-not-allowed"
                }
  `}
        >
            📥 Download PDF
        </button>


    );
};

export default PdfDownloadButton;
