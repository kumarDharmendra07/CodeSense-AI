import React from "react";


export default function QuickHelpLinks() {
return (
<div className="max-w-5xl mx-auto mt-16 px-6">
<h2 className="text-2xl font-semibold mb-4">Quick Help Links</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300">
<a className="bg-[#0c1120] p-4 rounded-xl border border-[#1a2338] hover:bg-[#131b33] transition" href="#">📘 Documentation</a>
<a className="bg-[#0c1120] p-4 rounded-xl border border-[#1a2338] hover:bg-[#131b33] transition" href="#">❓ FAQ</a>
<a className="bg-[#0c1120] p-4 rounded-xl border border-[#1a2338] hover:bg-[#131b33] transition" href="#">🔧 Troubleshooting</a>
</div>
</div>
);
}