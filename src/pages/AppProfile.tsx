
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar, Download, Star, Eye, Smartphone, Globe, Flag, Image, MessageSquare, Edit } from 'lucide-react';

const AppProfile = () => {
  return (
    <Layout title="App Profile" subtitle="Manage your app store listing details">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-slab font-bold">App Information</h3>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Edit className="h-4 w-4" /> Edit
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-24 w-24 rounded-xl bg-redbox-light-grey flex items-center justify-center">
                  <Smartphone className="h-12 w-12 text-redbox-indigo" />
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl font-bold">FitTracker Pro</h2>
                    <p className="text-muted-foreground">Redbox Mobile Apps, Inc.</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 font-medium">4.6</span>
                  </div>
                </div>
                
                <p className="text-sm">Track your fitness journey, set goals, and achieve results with the #1 fitness tracking app. Customized workout plans, nutrition tracking, and progress analytics.</p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs rounded-full bg-redbox-light-grey text-redbox-indigo">Fitness</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-redbox-light-grey text-redbox-indigo">Health</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-redbox-light-grey text-redbox-indigo">Tracking</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-redbox-light-grey text-redbox-indigo">Workout</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-slab font-bold">App Description</h3>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Edit className="h-4 w-4" /> Edit
              </Button>
            </div>
            
            <div className="text-sm space-y-3">
              <p><strong>Transform Your Fitness Journey with FitTracker Pro</strong></p>
              <p>FitTracker Pro is the ultimate fitness companion designed to help you achieve your health goals. Whether you're a beginner or a fitness enthusiast, our app provides personalized workout plans, detailed progress tracking, and nutrition guidance.</p>
              <p><strong>Key Features:</strong></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Customized workout plans based on your goals and fitness level</li>
                <li>Comprehensive exercise library with detailed instructions</li>
                <li>Real-time workout tracking with performance metrics</li>
                <li>Nutrition tracking and meal planning suggestions</li>
                <li>Progress analytics with visual charts and insights</li>
                <li>Community support and challenges to keep you motivated</li>
                <li>Integration with wearable devices for accurate health data</li>
              </ul>
              <p>Join millions of users who have transformed their lives with FitTracker Pro. Download now and start your fitness journey today!</p>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-slab font-bold">Visual Assets</h3>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Edit className="h-4 w-4" /> Edit
              </Button>
            </div>
            
            <h4 className="text-md font-medium mb-3">Screenshots</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-[9/16] bg-redbox-light-grey rounded-md flex items-center justify-center">
                  <Image className="h-8 w-8 text-redbox-indigo opacity-50" />
                </div>
              ))}
            </div>
            
            <h4 className="text-md font-medium mb-3">Preview Video</h4>
            <div className="aspect-video bg-redbox-light-grey rounded-md flex items-center justify-center">
              <div className="text-center">
                <Image className="h-12 w-12 mx-auto text-redbox-indigo opacity-50" />
                <p className="text-sm text-muted-foreground mt-2">App Preview Video</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-slab font-bold mb-4">App Statistics</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <Download className="h-5 w-5 text-redbox-purple mr-2" />
                  <span>Total Downloads</span>
                </div>
                <span className="font-medium">285,432</span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-redbox-red mr-2" />
                  <span>Rating Count</span>
                </div>
                <span className="font-medium">12,769</span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <Eye className="h-5 w-5 text-redbox-orange mr-2" />
                  <span>Impressions</span>
                </div>
                <span className="font-medium">985,210</span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-redbox-indigo mr-2" />
                  <span>Last Updated</span>
                </div>
                <span className="font-medium">Mar 15, 2023</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-slab font-bold mb-4">Store Presence</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <Flag className="h-5 w-5 text-redbox-purple mr-2" />
                  <span>Countries</span>
                </div>
                <span className="font-medium">154</span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-redbox-red mr-2" />
                  <span>Languages</span>
                </div>
                <span className="font-medium">14</span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-redbox-orange mr-2" />
                  <span>Localized Descriptions</span>
                </div>
                <span className="font-medium">8</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-slab font-bold mb-4">App Metadata</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium">App Name</h4>
                <p className="text-sm text-muted-foreground">FitTracker Pro: Workout & Diet</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Subtitle</h4>
                <p className="text-sm text-muted-foreground">Fitness Tracker & Workout Planner</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Category</h4>
                <p className="text-sm text-muted-foreground">Health & Fitness</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Developer</h4>
                <p className="text-sm text-muted-foreground">Redbox Mobile Apps, Inc.</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">App Size</h4>
                <p className="text-sm text-muted-foreground">68 MB</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Age Rating</h4>
                <p className="text-sm text-muted-foreground">4+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AppProfile;
