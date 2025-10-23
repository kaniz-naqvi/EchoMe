import React, { useState } from "react";
import { useTheme } from "@/styles/theme";
import Button from "@/components/Atoms/Buttons/Buttons";
import Card from "@/components/Atoms/Card/Card";
import { H2 } from "@/components/Atoms/Shared/headings";
import InputComponent from "@/components/Atoms/Shared/Input";

const Register = () => {
  const colors = useTheme();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confrimPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center w-full">
      {/*  Card */}
      <Card heightAndWidth="w-full md:max-w-md lg:max-w-md">
        {/* Title */}
        <H2 className="text-center mb-1" color={"#0E6BA8"}>
          Create Account
        </H2>
        <p
          className="text-center mb-6 text-sm"
          style={{ color: colors.greyText }}
        >
          Join us and start your journey today!
        </p>
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          {/* First Name */}
          <InputComponent
            icon={"profile"}
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            label={"Name"}
            placeholder={"Your Name"}
            required
          />

          {/* Email */}
          <InputComponent
            icon={"mail"}
            type="email"
            name="email"
            label="Email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="example@email.com"
          />

          {/* Password */}
          <InputComponent
            type="password"
            name="password"
            label="Password"
            icon="lock"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <InputComponent
            type="password"
            name="password"
            label="Confrim your password"
            icon="lock"
            placeholder="Password"
            value={form.confrimPassword}
            onChange={handleChange}
            required
          />
          {/* Button */}
          <div className="pt-2">
            <Button type="submit" className="w-full">
              Register
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Register;
