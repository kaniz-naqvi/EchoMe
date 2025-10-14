import React from "react";
import { H3 } from "@/components/Atoms/Shared/headings";
import Button from "@/components/Atoms/Buttons/Buttons"; // custom button
import InputComponent from "@/components/Atoms/Shared/Input"; // custom input
import Card from "@/components/Atoms/Card/Card";
import FormFooter from "@/components/Atoms/Shared/checkout";
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      {/* <H1 className="text-center mt-5 mb-6">WellCome Back</H1> */}

      <Card className="w-full max-w-md">
        <H3 className="text-center mb-12">Sign in to your account</H3>

        <form>
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
            checkboxName="remember"
            checkboxLabel="Keep me signed in"
            defaultChecked={true}
            linkTo="/forgot-password"
            linkText="Forgot your password?"
          />

          <Button variant="primary" className="w-full mt-2 " type="submit">
            Sign in
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
