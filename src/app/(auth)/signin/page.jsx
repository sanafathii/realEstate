import SigninPage from "@/components/template/SigninPage";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function Signin() {
  const session = await getServerSession(authOption);
  if (session) {
    redirect("/");
  }
  return <SigninPage />;
}

export default Signin;
