import SignupPage from "@/components/template/SignupPage";
import React from "react";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function signup() {
  const session = await getServerSession(authOption);
  if (session) {
    redirect("/");
  }
  return <SignupPage />;
}

export default signup;
