import React from "react";


export default function BugReport() {
return (
<div className="max-w-5xl mx-auto mt-20 px-6">
<h2 className="text-2xl font-semibold mb-4">Report a Bug</h2>
<p className="text-gray-300 mb-4">Found an issue? Help us improve CodeSense AI by reporting bugs.</p>


<div className="bg-[#0c1120] p-6 rounded-xl border border-[#1a2338]">
<p className="text-gray-400 mb-3">📝 What to include:</p>
<ul className="list-disc ml-6 text-gray-300 space-y-2">
<li>Steps to reproduce the issue</li>
<li>Expected vs actual behavior</li>
<li>Your browser & device info</li>
<li>Screenshot or code snippet (optional)</li>
</ul>
</div>
</div>
);
}