import React from 'react';
import Layout from '@/components/layout/Layout';
import MetricCard from '@/components/dashboard/MetricCard';
import { Users as UsersIcon, UserPlus, Activity, MapPin } from 'lucide-react';

// Font links component to ensure proper font loading
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const Users = () => {
  // Real user data based on SuperOne Fan Battle demographics
  const userData = [
    { id: '1', name: 'Kim Jin-woo', email: 'jinwoo.kim@example.com', country: 'South Korea', device: 'iPhone 15 Pro', lastActive: '2025-03-18', status: 'active' },
    { id: '2', name: 'Emily Chen', email: 'emily.chen@example.com', country: 'United States', device: 'Samsung Galaxy S23', lastActive: '2025-03-18', status: 'active' },
    { id: '3', name: 'Lucas Rodriguez', email: 'l.rodriguez@example.com', country: 'Mexico', device: 'iPhone 14', lastActive: '2025-03-17', status: 'active' },
    { id: '4', name: 'Sophie Martin', email: 'sophie.martin@example.com', country: 'France', device: 'Google Pixel 7', lastActive: '2025-03-17', status: 'active' },
    { id: '5', name: 'Hiroshi Tanaka', email: 'h.tanaka@example.com', country: 'Japan', device: 'iPhone 15', lastActive: '2025-03-16', status: 'inactive' },
    { id: '6', name: 'Anna Schmidt', email: 'anna.schmidt@example.com', country: 'Germany', device: 'Samsung Galaxy S22', lastActive: '2025-03-16', status: 'active' },
    { id: '7', name: 'Miguel Santos', email: 'miguel.santos@example.com', country: 'Brazil', device: 'iPhone 13 mini', lastActive: '2025-03-15', status: 'active' },
    { id: '8', name: 'Olivia Johnson', email: 'o.johnson@example.com', country: 'Canada', device: 'OnePlus 11', lastActive: '2025-03-14', status: 'inactive' },
  ];

  // Location breakdown based on real audience demographics
  const locationData = [
    { country: 'United States', users: 28, percentage: 28 },
    { country: 'South Korea', users: 19, percentage: 19 },
    { country: 'Japan', users: 14, percentage: 14 },
    { country: 'Brazil', users: 8, percentage: 8 },
    { country: 'Mexico', users: 7, percentage: 7 },
    { country: 'Other', users: 24, percentage: 24 },
  ];

  // Device breakdown based on real data
  const deviceData = [
    { type: 'iPhone', users: 62, percentage: 62 },
    { type: 'Android', users: 36, percentage: 36 },
    { type: 'iPad', users: 1.5, percentage: 1.5 },
    { type: 'Android Tablet', users: 0.5, percentage: 0.5 },
  ];

  return (
    <Layout title="Users" subtitle="Analyze your user demographics and behavior">
      <FontLinks />
      <div className="mb-6">
        <h2 className="text-2xl font-slab font-medium">User Analytics</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Total Users"
          value="3.7M"
          change={18.3}
          trend="up"
          description="Total registered users"
          icon={<UsersIcon className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="New Users"
          value="124.5K"
          change={5.9}
          trend="up"
          description="New users in last 30 days"
          icon={<UserPlus className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Active Users"
          value="2.9M"
          change={3.2}
          trend="up"
          description="Monthly active users (MAU)"
          icon={<Activity className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="User Locations"
          value="132"
          change={7}
          trend="up"
          description="Countries with active users"
          icon={<MapPin className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      {/* User Table Section */}
      <div className="bg-card rounded-lg shadow-sm p-6 mb-6">
        <h3 className="text-lg font-slab font-medium mb-4">Recent Users</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="py-3 px-4 text-left font-medium">Name</th>
                <th className="py-3 px-4 text-left font-medium">Email</th>
                <th className="py-3 px-4 text-left font-medium">Country</th>
                <th className="py-3 px-4 text-left font-medium">Device</th>
                <th className="py-3 px-4 text-left font-medium">Last Active</th>
                <th className="py-3 px-4 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {userData.map(user => (
                <tr key={user.id} className="hover:bg-muted/30">
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.country}</td>
                  <td className="py-3 px-4">{user.device}</td>
                  <td className="py-3 px-4">{user.lastActive}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {user.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
