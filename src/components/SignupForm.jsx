// import React from "react";
// import { Link } from "react-router-dom";

// export default function SignupForm() {
//   return (
//     <div className="p-10">

//       <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>

//       <form className="space-y-5">

//         <div>
//           <label className="text-gray-300 text-sm">Your Name</label>
//           <input
//             type="text"
//             className="w-full mt-1 p-3 bg-[#0f1724] border border-[#2a3550] 
//               rounded-lg focus:outline-none focus:border-purple-500"
//             placeholder="John Doe"
//           />
//         </div>

//         <div>
//           <label className="text-gray-300 text-sm">Your Email</label>
//           <input
//             type="email"
//             className="w-full mt-1 p-3 bg-[#0f1724] border border-[#2a3550] 
//               rounded-lg focus:outline-none focus:border-purple-500"
//             placeholder="you@example.com"
//           />
//         </div>

//         <div>
//           <label className="text-gray-300 text-sm">Create Password</label>
//           <input
//             type="password"
//             className="w-full mt-1 p-3 bg-[#0f1724] border border-[#2a3550] 
//               rounded-lg focus:outline-none focus:border-purple-500"
//             placeholder="••••••••"
//           />
//         </div>

//         <div>
//           <label className="text-gray-300 text-sm">Repeat Password</label>
//           <input
//             type="password"
//             className="w-full mt-1 p-3 bg-[#0f1724] border border-[#2a3550] 
//               rounded-lg focus:outline-none focus:border-purple-500"
//             placeholder="••••••••"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-800 
//             hover:from-purple-500 hover:to-purple-700 transition rounded-lg 
//             text-white font-medium shadow-lg shadow-purple-900/40"
//         >
//           Sign Up
//         </button>
//       </form>

//       {/* Divider */}
//       <div className="flex items-center gap-4 my-6">
//         <div className="h-px flex-1 bg-gray-600/40"></div>
//         <span className="text-gray-400 text-sm">OR</span>
//         <div className="h-px flex-1 bg-gray-600/40"></div>
//       </div>

//       {/* Social Logins */}
//       <div className="flex flex-col gap-3">
//         <button className="p-3 w-full border border-gray-600/40 rounded-lg hover:bg-[#1a1f2e]">
//           Continue with Google
//         </button>
//         <button className="p-3 w-full border border-gray-600/40 rounded-lg hover:bg-[#1a1f2e]">
//           Continue with GitHub
//         </button>
//       </div>

//       {/* Already a Member */}
//       <p className="mt-6 text-gray-400 text-center text-sm">
//         Already have an account?{" "}
//         <Link to="/login" className="text-purple-400 hover:underline">
//           Sign in here
//         </Link>
//       </p>
//     </div>
//   );
// }



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignupForm() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (pass !== repeatPass) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      navigate("/login"); // redirect to login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>

      {error && (
        <p className="bg-red-600/30 text-red-300 p-2 rounded mb-3 text-sm">{error}</p>
      )}

      <form className="space-y-5" onSubmit={handleSignup}>
        <div>
          <label className="text-gray-300 text-sm">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-3 bg-[#0f1724] border border-[#2a3550]
            rounded-lg"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-3 bg-[#0f1724] border border-[#2a3550]
            rounded-lg"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">Create Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full mt-1 p-3 bg-[#0f1724] border border-[#2a3550]
            rounded-lg"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">Repeat Password</label>
          <input
            type="password"
            value={repeatPass}
            onChange={(e) => setRepeatPass(e.target.value)}
            className="w-full mt-1 p-3 bg-[#0f1724] border border-[#2a3550]
            rounded-lg"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-800 
          hover:from-purple-500 hover:to-purple-700 transition rounded-lg 
          text-white font-medium shadow-lg shadow-purple-900/40"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-6 text-gray-400 text-center text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-purple-400 hover:underline">
          Sign in here
        </Link>
      </p>
    </div>
  );
}
