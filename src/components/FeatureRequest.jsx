import React from "react";


export default function FeatureRequest() {
return (
<div className="max-w-5xl mx-auto mt-20 px-6">
<h2 className="text-2xl font-semibold mb-4">Request a Feature</h2>
<p className="text-gray-300 mb-4">Have an idea that can make CodeSense AI better? We’d love to hear it.</p>


<div className="bg-[#0c1120] p-6 rounded-xl border border-[#1a2338]">
<textarea placeholder="Describe your feature idea..." rows="5" className="w-full p-3 bg-[#0f1724] border border-[#2a3550] rounded-lg focus:outline-none"></textarea>


<button className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-600 rounded-lg text-white">Submit Feature</button>
</div>
</div>
);
}