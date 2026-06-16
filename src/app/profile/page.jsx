"use client";

import UpdateProfile from "@/components/shared/UpdateProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import { Mail, User, Calendar } from "lucide-react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="w-11/12 max-w-5xl mx-auto">
        {/* Profile Card */}
        <Card className="p-8 shadow-xl rounded-3xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="w-28 h-28 text-3xl">
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user?.name?.slice(0, 2).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>

              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {user?.name}
                </h1>

                <div className="flex items-center gap-2 text-gray-600 mt-2">
                  <Mail size={16} />
                  <p>{user?.email}</p>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <User size={16} />
                  <p>Customer</p>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <Calendar size={16} />
                  <p>Member of QurbaniHat</p>
                </div>
              </div>
            </div>

            
            <UpdateProfile></UpdateProfile>
          </div>
        </Card>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="p-6 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-[#14532D]">0</h2>
            <p className="text-gray-500">Bookings</p>
          </Card>

          <Card className="p-6 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-[#14532D]">0</h2>
            <p className="text-gray-500">Purchased Animals</p>
          </Card>

          <Card className="p-6 text-center shadow-lg">
            <h2 className="text-3xl font-bold text-[#14532D]">0 ৳</h2>
            <p className="text-gray-500">Total Spending</p>
          </Card>
        </div>

        {/* About Section */}
        <Card className="mt-8 p-6 shadow-lg rounded-3xl">
          <h2 className="text-xl font-bold mb-3">About Account</h2>

          <p className="text-gray-600">
            Welcome to QurbaniHat. Here you can manage your profile, track
            bookings, browse animals and complete your Qurbani journey easily
            and securely.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
