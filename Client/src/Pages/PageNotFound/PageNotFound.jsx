import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../styles/theme";
import { H1, H2, H3, SubHeading } from "@/components/Atoms/Shared/headings";
import Button from "@/components/Atoms/Buttons/Buttons";
import { getIcon } from "@/utils/helpers/iconsHelper";

const NotFoundPage = () => {
  const theme = useTheme();
  const SmileySad = getIcon("sadEmoji");
  return (
    <div
      className="h-[100vh] flex items-center justify-center p-4"
      style={{
        background: theme.background,
        color: theme.text,
      }}
    >
      <div className="max-w-md w-full text-center">
        {/* EchoMe Logo/Brand */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3">
            <img
              src="/EchoMe.svg"
              alt="Echo Me Logo"
              className="h-20 w-auto object-cover"
            />
            <h1 className="text-4xl font-bold italic leading-none">
              <span style={{ color: theme?.primary }}>Echo</span>
              <span style={{ color: theme?.secondary }}>ME</span>
            </h1>
          </div>

          <SubHeading className="block mb-2 lg:mb-4">
            portfolio generator platform
          </SubHeading>
        </div>

        {/* 404 */}
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto">
            <div
              className="absolute inset-0 rounded-full flex items-center justify-center"
              style={{ background: `${theme.primary}20` }}
            >
              <SmileySad
                className="w-16 h-16"
                style={{ color: theme.primary }}
              />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8" style={{ color: theme.text }}>
          <H2>404</H2>
          <H3> Page Not Found</H3>
          <p>
            Oops! The page you're looking for doesn't exist or has been moved
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button>Go to Homepage</Button>
          </Link>
          <Link to="/dashboard">
            <Button variant={"secondary"}> Go to Dashboard</Button>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-8 text-sm">
          <p style={{ color: theme.text }}>
            Need help?{" "}
            <Link to="/contact" style={{ color: theme.primary }}>
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
