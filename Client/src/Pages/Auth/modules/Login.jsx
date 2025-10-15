import React, { useState } from "react";
import { useTheme } from "@/styles/theme";
import { Mail, Lock } from "lucide-react";
import Button from "@/components/Atoms/Buttons/Buttons";
import IconContainerButton from "@/components/Atoms/Buttons/IconContainerButton";
import Loader from "@/components/Atoms/Loader/Loader";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const colors = useTheme();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Login form data:", form);
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-10 overflow-hidden"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      {/* Background Loader  */}
      <div className="absolute inset-0 flex items-center justify-center opacity-100 blur-xl">
        <Loader isLoading={true} />
      </div>

      {/* Card */}
      <div
        className="relative shadow-lg rounded-2xl w-full max-w-md p-6 backdrop-blur-lg bg-white/20 border border-white/30 transition-all duration-300"
      >
        {/* Loader on form */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 z-20 animate-fadeIn">
            <Loader isLoading={true} />
          </div>
        )}

        {/* Title */}
        <h2
          className="text-3xl font-bold text-center mb-2"
          style={{ color: colors.primary }}
        >
          Welcome Back
        </h2>
        <p className="text-center mb-6 text-sm" style={{ color: colors.greyText }}>
          Login to continue your journey
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email Address</label>
            <div className="flex items-center rounded-lg px-3 py-2.5 bg-white border border-white/40 shadow-sm">
              <Mail size={18} className="mr-2 text-gray-600" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <div className="flex items-center rounded-lg px-3 py-2.5 bg-white border border-white/40 shadow-sm">
              <Lock size={18} className="mr-2 text-gray-600" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Button */}
          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              color={colors.primary}
              className="w-full py-2.5 rounded-lg font-semibold transition-all duration-200"
            >
              Login
            </Button>
          </div>

          {/* Social Buttons */}
          <div className="flex items-center justify-center space-x-3 mt-4">
            <IconContainerButton background={colors.primary} />
            <IconContainerButton background={colors.primary} />
            <IconContainerButton background={colors.primary} />
          </div>
        </form>
      </div>

      {/* animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Login;
