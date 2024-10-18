import { authOption } from "@/app/api/auth/[...nextauth]/route";
import MyProfilesPage from "@/components/template/MyProfilesPage";
import User from "@/models/user";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import React from "react";

async function MyProfiles() {
  await connectDB();
  const session = await getServerSession(authOption);

  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  return (
    <div>
      <MyProfilesPage profiles={user.profiles} />
    </div>
  );
}

export default MyProfiles;
