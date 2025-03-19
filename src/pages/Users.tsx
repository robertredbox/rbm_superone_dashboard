
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import TimeSelector from '@/components/dashboard/TimeSelector';
import MetricCard from '@/components/dashboard/MetricCard';
import { Users as UsersIcon, UserPlus, Activity, MapPin } from 'lucide-react';

const Users = () => {
  const [timeRange, setTimeRange] = useState<string>('30d');

  // Mock user data
  const userData = [
    { id: '1', name: 'John Smith', email: 'john.smith@example.com', country: 'United States', device: 'iPhone 13', lastActive: '2023-03-25', status: 'active' },
    { id: '2', name: 'Emma Johnson', email: 'emma.johnson@example.com', country: 'United Kingdom', device: 'Samsung Galaxy S22', lastActive: '2023-03-24', status: 'active' },
    { id: '3', name: 'Michael Brown', email: 'michael.brown@example.com', country: 'Canada', device: 'iPhone 12', lastActive: '2023-03-23', status: 'active' },
    { id: '4', name: 'Sophia Martinez', email: 'sophia.martinez@example.com', country: 'Spain', device: 'Google Pixel 6', lastActive: '2023-03-22', status: 'active' },
    { id: '5', name: 'William Johnson', email: 'william.johnson@example.com', country: 'Australia', device: 'iPhone 13 Pro', lastActive: '2023-03-20', status: 'inactive' },
    { id: '6', name: 'Olivia Wilson', email: 'olivia.wilson@example.com', country: 'Germany', device: 'Samsung Galaxy S21', lastActive: '2023-03-19', status: 'active' },
    { id: '7', name: 'James Taylor', email: 'james.taylor@example.com', country: 'France', device: 'iPhone SE', lastActive: '2023-03-18', status: 'active' },
    { id: '8', name: 'Isabella Anderson', email: 'isabella.anderson@example.com', country: 'Italy', device: 'OnePlus 9', lastActive: '2023-03-15', status: 'inactive' },
  ];

  // Location breakdown
  const locationData = [
    { country: 'United States', users: 42, percentage: 42 },
    { country: 'United Kingdom', users: 18, percentage: 18 },
    { country: 'Canada', users: 12, percentage: 12 },
    { country: 'Australia', users: 8, percentage: 8 },
    { country: 'Germany', users: 6, percentage: 6 },
    { country: 'Other', users: 14, percentage: 14 },
  ];

  // Device breakdown
  const deviceData = [
    { type: 'iPhone', users: 56, percentage: 56 },
    { type: 'Android', users: 38, percentage: 38 },
    { type: 'iPad', users: 4, percentage: 4 },
    { type: 'Android Tablet', users: 2, percentage: 2 },
  ];

  // Format the time range for display
  const getTimeRangeDisplay = () => {
    switch (timeRange) {
      case '7d':
        return 'Last 7 days';
      case '30d':
        return 'Last 30 days';
      case '90d':
        return 'Last 90 days';
      case '1y':
        return 'Last year';
      default:
        return 'Last 30 days';
    }
  };

  return (
    <Layout title="Users" subtitle="Analyze your user demographics and behavior">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-bold">User Analytics</h2>
        <TimeSelector onChange={setTimeRange} selectedRange={timeRange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Total Users"
          value="285,432"
          change={8.7}
          trend="up"
          description="Total registered users"
          icon={<UsersIcon className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="New Users"
          value="12,458"
          change={5.2}
          trend="up"
          description={`New users in ${getTimeRangeDisplay().toLowerCase()}`}
          icon={<UserPlus className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Active Users"
          value="156,789"
          change={3.8}
          trend="up"
          description="Monthly active users (MAU)"
          icon={<Activity className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="User Locations"
          value="154"
          change={6}
          trend="up"
          description="Countries with active users"
          icon={<MapPin className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg border border-border h-full">
            <div className="p-4 border-b border-border">
              <h3 className="text-lg font-slab font-bold">User List</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 text-sm font-medium">Name</th>
                    <th className="text-left p-3 text-sm font-medium">Country</th>
                    <th className="text-left p-3 text-sm font-medium">Device</th>
                    <th className="text-left p-3 text-sm font-medium">Last Active</th>
                    <th className="text-left p-3 text-sm font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {userData.map((user) => (
                    <tr key={user.id} className="hover:bg-muted/50">
                      <td className="p-3">
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-muted-foreground">{user.email}</div>
                        </div>
                      </td>
                      <td className="p-3 text-sm">{user.country}</td>
                      <td className="p-3 text-sm">{user.device}</td>
                      <td className="p-3 text-sm">{user.lastActive}</td>
                      <td className="p-3">
                        <span className={`inline-flex items-center px-2 py-1 text-xs rounded-full ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                          {user.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-slab font-bold mb-4">Location Breakdown</h3>
            {locationData.map((item) => (
              <div key={item.country} className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">{item.country}</span>
                  <span className="text-sm font-medium">{item.percentage}%</span>
                </div>
                <div className="w-full bg-redbox-light-grey rounded-full h-2">
                  <div 
                    className="bg-redbox-purple h-2 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-slab font-bold mb-4">Device Breakdown</h3>
            {deviceData.map((item) => (
              <div key={item.type} className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">{item.type}</span>
                  <span className="text-sm font-medium">{item.percentage}%</span>
                </div>
                <div className="w-full bg-redbox-light-grey rounded-full h-2">
                  <div 
                    className="bg-redbox-red h-2 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-bold mb-4">User Retention</h3>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative h-36 w-36">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">78%</div>
                  <div className="text-xs text-muted-foreground">Day 30 Retention</div>
                </div>
              </div>
              <svg className="h-full w-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#8A4FFF"
                  strokeWidth="3"
                  strokeDasharray="78, 100"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex-1">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Day 1</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-redbox-light-grey rounded-full h-2 mr-2">
                      <div className="bg-redbox-purple h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                </li>
                <li className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Day 7</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-redbox-light-grey rounded-full h-2 mr-2">
                      <div className="bg-redbox-purple h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                </li>
                <li className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Day 14</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-redbox-light-grey rounded-full h-2 mr-2">
                      <div className="bg-redbox-purple h-2 rounded-full" style={{ width: "82%" }}></div>
                    </div>
                    <span className="text-sm font-medium">82%</span>
                  </div>
                </li>
                <li className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Day 30</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-redbox-light-grey rounded-full h-2 mr-2">
                      <div className="bg-redbox-purple h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-bold mb-4">User Engagement</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-redbox-light-grey/50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-redbox-indigo">4.2</div>
              <div className="text-sm text-muted-foreground">Sessions per Day</div>
            </div>
            <div className="bg-redbox-light-grey/50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-redbox-red">18 min</div>
              <div className="text-sm text-muted-foreground">Avg. Session Duration</div>
            </div>
            <div className="bg-redbox-light-grey/50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-redbox-orange">72%</div>
              <div className="text-sm text-muted-foreground">Feature Adoption</div>
            </div>
            <div className="bg-redbox-light-grey/50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-redbox-purple">58%</div>
              <div className="text-sm text-muted-foreground">Daily Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
