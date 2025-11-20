import React from "react";


export default function ContactForm() {
return (
<div className="bg-[#0c1120] p-8 rounded-2xl border border-[#1a2338] shadow-xl">
<h2 className="text-2xl font-semibold mb-4">Send us a message</h2>


<form className="space-y-4">
<div>
<label className="text-gray-300 text-sm">Name</label>
<input type="text" className="w-full mt-1 p-3 bg-[#0f1724] border border-[#2a3550] rounded-lg focus:outline-none" placeholder="Your Name" />
</div>


<div>
<label className="text-gray-300 text-sm">Email</label>
<input type="email" className="w-full mt-1 p-3 bg-[#0f1724] border border-[#2a3550] rounded-lg focus:outline-none" placeholder="your@email.com" />
</div>


<div>
<label className="text-gray-300 text-sm">Message</label>
<textarea rows="5" className="w-full mt-1 p-3 bg-[#0f1724] border border-[#2a3550] rounded-lg focus:outline-none" placeholder="Write your message..."></textarea>
</div>


<button type="submit" className="w-full py-3 bg-purple-700 hover:bg-purple-600 transition rounded-lg text-white font-medium">
Send Message
</button>
</form>
</div>
);
}