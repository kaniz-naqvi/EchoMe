import React from "react";
import { H3 } from "@/components/Atoms/Shared/headings";
import Button from "@/components/Atoms/Buttons/Buttons"; // custom button
import InputComponent from "@/components/Atoms/Shared/Input"; // custom input
import Card from "@/components/Atoms/Card/Card";
import FormFooter from "@/components/Atoms/Shared/checkout";
import AuthRedirect from "@/components/Atoms/Shared/AuthRedirect";
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      {/* <H1 className="text-center mt-5 mb-6">WellCome Back</H1> */}

      <Card className="w-full max-w-md">
        <H3 className="text-center mb-12">Start Your Journey with Echome </H3>

        <form>
          <InputComponent
            label="Name"
            type="text"
            icon="profile"
            placeholder="Enter your Name"
            required
            className="my-3"
          />
          <InputComponent
            label="Email"
            type="text"
            icon="profile"
            placeholder="name@example.com"
            required
            className="my-3"
          />
          <InputComponent
            label="Password"
            type="password"
            icon="lock"
            placeholder="Your password"
            required
            className="my-3"
          />

          <FormFooter
            showForgot={false}
            checkboxLabel="I agree to terms & conditions"
          />

          <Button variant="primary" className="w-full mt-2 " type="submit">
            Sign Up
          </Button>
        </form>
        <AuthRedirect
          text="Already have an account?"
          linkText="Login"
          linkTo="/login"
          type="dashboard"
        />
      </Card>
    </div>
  );
};

export default Login;
