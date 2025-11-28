import React, { useState } from "react";
import { useTheme } from "@/styles/theme";
import Button from "@/components/Atoms/Buttons/Buttons";
import Card from "@/components/Atoms/Card/Card";
import InputComponent from "@/components/Atoms/Shared/Input";
import { H2 } from "@/components/Atoms/Shared/headings";

const Login = () => {
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
  };

  return (
    <div className="flex items-center justify-center w-full mt-12">
      <Card heightAndWidth="w-full md:max-w-md lg:max-w-md">
        {/* Title */}
        <H2 className="text-center mb-1" color={"#0E6BA8"}>
          Welcome Back
        </H2>
        <p
          className="text-center mb-4 text-xs lg:text-sm"
          style={{ color: colors.greyText }}
        >
          Login to continue your journey
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <InputComponent
            type="email"
            name="email"
            label="Email"
            value={form.email}
            icon="mail"
            onChange={handleChange}
            required
            placeholder="example@email.com"
          />

          <InputComponent
            type="password"
            name="password"
            label="Password"
            icon="lock"
            value={form.password}
            onChange={handleChange}
            required
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
