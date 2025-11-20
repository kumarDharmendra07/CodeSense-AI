import React from "react";


export default function SupportEmails() {
return (
<div className="bg-[#0c1120] p-8 rounded-2xl border border-[#1a2338] shadow-xl">
<h2 className="text-2xl font-semibold mb-4">Support Emails</h2>
<div className="text-gray-300 space-y-3">
<p>📧 <span className="text-white font-medium">General Support:</span> support@codesense.ai</p>
<p>🐞 <span className="text-white font-medium">Bug Reports:</span> bugs@codesense.ai</p>
<p>💡 <span className="text-white font-medium">Feature Requests:</span> features@codesense.ai</p>
<p>📄 <span className="text-white font-medium">Documentation Help:</span> docs@codesense.ai</p>
</div>
</div>
);
}