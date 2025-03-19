import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bell, Download, Globe, Lock, Mail, Shield, User, TrendingUp, Search, MessageSquare } from 'lucide-react';

const Settings = () => {
  return (
    <Layout title="Settings" subtitle="Configure your dashboard preferences">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-slab font-bold mb-6">Account Information</h3>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="h-24 w-24 rounded-full bg-redbox-indigo flex items-center justify-center text-white text-2xl font-bold mb-3">
                    RB
                  </div>
                  <Button variant="outline" size="sm">Change Avatar</Button>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" value="Redbox" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" value="Team" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" value="team@redbox.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" value="Redbox Mobile, Inc." />
                  </div>
                  
                  <div className="pt-2">
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-slab font-bold mb-6">Preferences</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Language</Label>
                    <div className="text-sm text-muted-foreground">
                      Select your preferred language for the dashboard
                    </div>
                  </div>
                  <div className="flex items-center">
                    <select className="border rounded-md px-3 py-1.5 bg-background text-sm">
                      <option>English (US)</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Japanese</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Time Zone</Label>
                    <div className="text-sm text-muted-foreground">
                      Choose your local time zone for accurate reporting
                    </div>
                  </div>
                  <div className="flex items-center">
                    <select className="border rounded-md px-3 py-1.5 bg-background text-sm">
                      <option>Pacific Time (UTC-8)</option>
                      <option>Mountain Time (UTC-7)</option>
                      <option>Central Time (UTC-6)</option>
                      <option>Eastern Time (UTC-5)</option>
                      <option>UTC</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Dark Mode</Label>
                    <div className="text-sm text-muted-foreground">
                      Enable dark mode for a more comfortable viewing experience
                    </div>
                  </div>
                  <Switch id="dark-mode" />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-slab font-bold mb-6">Notification Settings</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-center space-x-3">
                  <Bell className="h-5 w-5 text-redbox-purple" />
                  <div>
                    <Label className="text-base">Performance Alerts</Label>
                    <div className="text-sm text-muted-foreground">
                      Get notified about significant changes in app performance metrics
                    </div>
                  </div>
                </div>
                <Switch id="performance-alerts" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-redbox-red" />
                  <div>
                    <Label className="text-base">Ranking Changes</Label>
                    <div className="text-sm text-muted-foreground">
                      Receive alerts when your app ranking changes significantly
                    </div>
                  </div>
                </div>
                <Switch id="ranking-changes" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-center space-x-3">
                  <Search className="h-5 w-5 text-redbox-orange" />
                  <div>
                    <Label className="text-base">Keyword Opportunities</Label>
                    <div className="text-sm text-muted-foreground">
                      Get suggestions for new keywords to target based on data analysis
                    </div>
                  </div>
                </div>
                <Switch id="keyword-opportunities" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5 text-redbox-indigo" />
                  <div>
                    <Label className="text-base">Review Notifications</Label>
                    <div className="text-sm text-muted-foreground">
                      Get notified when users leave new reviews on your app
                    </div>
                  </div>
                </div>
                <Switch id="review-notifications" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-redbox-purple" />
                  <div>
                    <Label className="text-base">Email Digest</Label>
                    <div className="text-sm text-muted-foreground">
                      Receive a weekly email summary of your app's performance
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <select className="border rounded-md px-3 py-1.5 bg-background text-sm">
                    <option>Daily</option>
                    <option selected>Weekly</option>
                    <option>Monthly</option>
                    <option>Never</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="integrations">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-slab font-bold mb-6">Connected Services</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-redbox-light-grey rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#8A4FFF" />
                      <path d="M2 17L12 22L22 17" stroke="#8A4FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12L12 17L22 12" stroke="#8A4FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">App Store Connect</div>
                    <div className="text-sm text-muted-foreground">
                      Connected · Last synced 2 hours ago
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
              
              <div className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-redbox-light-grey rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 12H13V5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V12H4C3.44772 12 3 12.4477 3 13C3 13.5523 3.44772 14 4 14H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V14H20C20.5523 14 21 13.5523 21 13C21 12.4477 20.5523 12 20 12Z" fill="#FF3850" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Google Play Console</div>
                    <div className="text-sm text-muted-foreground">
                      Connected · Last synced 3 hours ago
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
              
              <div className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-redbox-light-grey rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="#FF884D" strokeWidth="2" />
                      <path d="M12 17V12" stroke="#FF884D" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="8" r="1" fill="#FF884D" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Google Analytics</div>
                    <div className="text-sm text-muted-foreground">
                      Not connected
                    </div>
                  </div>
                </div>
                <Button size="sm">Connect</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-redbox-light-grey rounded-full flex items-center justify-center">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 14L12 8L3 14L12 20L21 14Z" fill="#5271FF" />
                      <path d="M12 3L21 9L12 15L3 9L12 3Z" stroke="#5271FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Firebase</div>
                    <div className="text-sm text-muted-foreground">
                      Not connected
                    </div>
                  </div>
                </div>
                <Button size="sm">Connect</Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="security">
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-slab font-bold mb-6">Password</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                
                <div>
                  <Button>Update Password</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-slab font-bold mb-6">Two-Factor Authentication</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-redbox-purple" />
                    <div>
                      <Label className="text-base">Two-Factor Authentication</Label>
                      <div className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </div>
                    </div>
                  </div>
                  <Switch id="two-factor" />
                </div>
                
                <div className="pt-2">
                  <Button variant="outline">Setup Two-Factor Authentication</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-slab font-bold mb-6">Sessions</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b">
                  <div className="flex items-center space-x-3">
                    <Lock className="h-5 w-5 text-redbox-red" />
                    <div>
                      <div className="font-medium">Current Session</div>
                      <div className="text-sm text-muted-foreground">
                        Mac OS · Chrome · San Francisco, CA
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 font-medium">Active Now</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Lock className="h-5 w-5 text-redbox-red" />
                    <div>
                      <div className="font-medium">Other Session</div>
                      <div className="text-sm text-muted-foreground">
                        Windows · Firefox · New York, NY
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">2 days ago</div>
                </div>
                
                <div className="pt-2">
                  <Button variant="outline" className="text-red-500">Sign Out All Devices</Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Settings;
