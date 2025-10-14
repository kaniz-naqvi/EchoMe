import React from "react";
import { useTheme } from "@/styles/theme";
import InputComponent from "@/components/Atoms/Shared/Input"; // 👈 reuse input
import LinkText from "@/components/Atoms/Shared/LinkText";   // theme link

const FormFooter = ({
  showForgot = true, // 👈 control: show/hide forgot password link
  checkboxName = "remember",
  checkboxLabel = "Keep me signed in",
  defaultChecked = false,
  linkTo = "/forgot-password",
  linkText = "Forgot password?",
  type = "dashboard",
}) => {
  const theme = useTheme(type);

  return (
    <div
      className="flex items-center justify-between mb-4"
      style={{ color: theme.text }}
    >
      {/* ✅ Checkbox via InputComponent */}
      <InputComponent
        type="checkbox"
        name={checkboxName}
        defaultChecked={defaultChecked}
        checkboxLabel={checkboxLabel}
      />

      {/* ✅ Conditionally render forgot password link */}
      {showForgot && (
        <LinkText to={linkTo} type={type} className="text-sm">
          {linkText}
        </LinkText>
      )}
    </div>
  );
};

export default FormFooter;
