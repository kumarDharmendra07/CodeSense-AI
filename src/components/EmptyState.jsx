const EmptyState = () => {
  return (
    <div className="text-center opacity-60">
      <div className="text-4xl mb-3">📘</div>

      <p className="text-gray-300">
        Your AI-generated explanation will appear here
      </p>

      <p className="text-sm mt-1 text-gray-400">
        Enter code and click <span className="text-purple-300">"Explain Code"</span> to begin
      </p>
    </div>
  );
};

export default EmptyState;
