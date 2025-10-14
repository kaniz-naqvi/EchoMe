import React from "react";
import P from "@/components/Atoms/Shared/P";
import LinkText from "@/components/Atoms/Shared/LinkText";

const AuthRedirect = ({ text, linkText, linkTo, type = "dashboard" }) => {
  return (
    <P className="text-center text-sm mt-4">
      {text} <LinkText to={linkTo} type={type}>{linkText}</LinkText>
    </P>
  );
};

export default AuthRedirect;
