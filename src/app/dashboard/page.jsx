import DashboardPage from "@/components/template/DashboardPage";
import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/user";

async function Dashboard() {
  await connectDB();

  const session = await getServerSession(authOption);
  const userEmail = session.user.email;

  const user = await User.findOne({ email: userEmail });

  return <DashboardPage createdAt={user.createdAt} />;
}

export default Dashboard;
