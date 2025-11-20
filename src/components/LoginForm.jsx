// // src/components/LoginForm.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// export default function LoginForm() {
//   return (
//     <div className="flex items-center justify-center p-10 lg:p-20 
//       bg-[#0c1120] border-l border-[#1a2338]">

//       <div className="w-full max-w-md">
//         <h2 className="text-3xl font-semibold mb-6 text-center">Log in</h2>

//         <form className="space-y-5">
          
//           {/* Email */}
//           <div>
//             <label className="text-gray-300 text-sm">E-mail</label>
//             <input
//               type="email"
//               placeholder="Enter your e-mail"
//               className="w-full mt-1 p-3 bg-[#0f1724] 
//               border border-[#2a3550] rounded-lg focus:outline-none"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="text-gray-300 text-sm">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="w-full mt-1 p-3 bg-[#0f1724] 
//               border border-[#2a3550] rounded-lg focus:outline-none"
//             />
//           </div>

//           {/* Remember + Forgot */}
//           <div className="flex justify-between items-center text-sm text-gray-400">
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input type="checkbox" className="accent-purple-600" />
//               Remember me
//             </label>

//             <button className="hover:text-purple-400">
//               Forgot password?
//             </button>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-purple-700 hover:bg-purple-600 
//             transition rounded-lg text-white font-medium"
//           >
//             Log in
//           </button>
//         </form>

//         {/* Register Link */}
//         <p className="text-center text-gray-400 mt-6">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-purple-400 hover:underline">
//             Register here
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, pass);
      navigate("/"); // redirect to homepage
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-semibold mb-6">Log in</h2>

      {error && (
        <p className="bg-red-600/30 text-red-300 p-2 rounded mb-4 text-sm">{error}</p>
      )}

      <form className="space-y-5" onSubmit={handleLogin}>
        <div>
          <label className="text-gray-300 text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-3 bg-[#0f1724] border border-[#2a3550]
            rounded-lg"
            placeholder="Enter your e-mail"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="w-full mt-1 p-3 bg-[#0f1724] border border-[#2a3550]
            rounded-lg"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-purple-700 hover:bg-purple-600
          transition rounded-lg text-white font-medium"
        >
          Log In
        </button>
      </form>

      <p className="text-center text-gray-400 mt-6">
        Don't have an account?{" "}
        <Link to="/signup" className="text-purple-400 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}
