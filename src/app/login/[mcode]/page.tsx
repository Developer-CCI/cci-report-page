import { Metadata } from "next";
import LoginContent from "./login-content";

export const metadata: Metadata = {
  title: "Login Page",
  description: "By Next.js",
};

export default function LoginPage() {
  return (
    <>
      <LoginContent />
    </>
  );
}
