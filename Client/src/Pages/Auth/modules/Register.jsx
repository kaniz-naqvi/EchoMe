import React, { useState } from "react";
import { useTheme } from "@/styles/theme";
import { User, Mail, Lock } from "lucide-react";
import Button from "@/components/Atoms/Buttons/Buttons";
import IconContainerButton from "@/components/Atoms/Buttons/IconContainerButton";
import Loader from "@/components/Atoms/Loader/Loader";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const colors = useTheme();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
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
      console.log("Register form data:", form);
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
      
      <div className="absolute inset-0 flex items-center justify-center opacity-100 blur-xl">
        <Loader isLoading={true} />
      </div>

      {/*  Card */}
      <div
        className="relative shadow-lg rounded-2xl w-full max-w-md p-6 backdrop-blur-lg bg-white/20 border border-white/30 transition-all duration-300"
      >
        {/* Loader */}
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
          Create Account
        </h2>
        <p className="text-center mb-6 text-sm" style={{ color: colors.greyText }}>
          Join us and start your journey today!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* First Name */}
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1">First Name</label>
              <div className="flex items-center rounded-lg px-3 py-2.5 bg-white border border-white/40 shadow-sm">
                <User size={18} className="mr-2 text-gray-600" />
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-1">Last Name</label>
              <div className="flex items-center rounded-lg px-3 py-2.5 bg-white border border-white/40 shadow-sm">
                <User size={18} className="mr-2 text-gray-600" />
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full bg-transparent outline-none text-sm text-gray-800 placeholder-gray-500"
                />
              </div>
            </div>
          </div>

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
              Register
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

export default Register;
