
import React, { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Is CodeSense AI free to use?",
      answer:
        "Yes! The Basic plan is completely free and includes essential features like syntax highlighting, auto language detection, and simple code explanations.",
    },
    {
      question: "Which languages does the AI support?",
      answer:
        "CodeSense AI supports JavaScript, Python, C++, Java, HTML, and more. We're adding new languages regularly.",
    },
    {
      question: "Does the Pro plan include PDF export?",
      answer:
        "Yes. Pro and Premium plans include high-quality multi-page PDF exports without watermark.",
    },
    {
      question: "What extra features does Premium offer?",
      answer:
        "Premium includes everything in Pro, plus advanced security, faster responses, large PDF export (20+ pages), and priority support.",
    },
    {
      question: "Will you add VS Code extension support?",
      answer:
        "Yes, we are working on a CodeSense AI VS Code extension coming soon!",
    },
    {
      question: "Does CodeSense AI store my code?",
      answer:
        "No. Your code is never stored or shared. All processing happens securely via encrypted API requests.",
    },
    {
      question: "Can I use CodeSense AI for competitive programming?",
      answer:
        "Yes! CodeSense AI is great for understanding solutions, optimizing logic, and generating explanations for complex algorithms.",
    },
    {
      question: "Can I upload a full project or only snippets?",
      answer:
        "You can paste any amount of code into the editor. Premium users can upload large files and export detailed multi-section explanations.",
    },
    {
      question: "How accurate are code explanations?",
      answer:
        "Our AI engine provides highly accurate, step-by-step explanations, with premium users receiving context-aware deep analysis.",
    },
    {
      question: "Do you support mobile devices?",
      answer:
        "Yes, CodeSense AI is fully responsive and works smoothly on mobile, tablets, and desktop browsers.",
    },
    {
      question: "Can the AI detect the code language automatically?",
      answer:
        "Absolutely. Auto-detection instantly identifies the language and adjusts syntax highlighting accordingly.",
    },
    {
      question: "Does CodeSense AI require signup to use?",
      answer:
        "Basic features can be used without an account. For Pro and Premium, you need to create an account for billing and cloud preferences.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, subscriptions are fully flexible. You can upgrade, downgrade, or cancel at any time with no hidden fees.",
    },
    {
      question: "Do you offer educational or student discounts?",
      answer:
        "Yes! Students and teachers can apply for up to 30% off on Pro and Premium plans.",
    },
    {
      question: "How fast does the AI generate explanations?",
      answer:
        "Basic answers take 2–5 seconds. Pro and Premium users get priority processing and faster responses.",
    },
    {
      question: "Which payment methods do you accept?",
      answer:
        "We support UPI, credit/debit cards, PayPal, Razorpay, and international payments.",
    },
    {
      question: "Is there an API available for developers?",
      answer:
        "Yes, an official CodeSense AI API for explanation and analysis is in development and coming soon.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // First 5 visible
  const visibleFaqs = showMore ? faqs : faqs.slice(0, 5);

  return (
    <div className="max-w-4xl mx-auto mt-20 mb-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {visibleFaqs.map((faq, i) => (
          <div
            key={i}
            className="bg-[#0c1120] border border-[#1f2a40] rounded-lg p-5 cursor-pointer"
            onClick={() => toggleFAQ(i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-purple-400">
                {openIndex === i ? "−" : "+"}
              </span>
            </div>

            {openIndex === i && (
              <p className="mt-3 text-gray-300 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {faqs.length > 5 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-5 py-2 bg-[#1a1a3b] hover:bg-[#26264a] rounded-lg text-white border border-[#2f2f4a] transition"
          >
            {showMore ? "Show Less ↑" : "Show More ↓"}
          </button>
        </div>
      )}
    </div>
  );
}
