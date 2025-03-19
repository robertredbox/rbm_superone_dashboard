
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  Search, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Settings, 
  Home, 
  Star 
} from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const Sidebar = () => {
  const location = useLocation();
  
  const navItems: NavItem[] = [
    {
      label: 'Dashboard',
      href: '/',
      icon: <Home className="h-5 w-5" />,
    },
    {
      label: 'Performance',
      href: '/performance',
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      label: 'Keywords',
      href: '/keywords',
      icon: <Search className="h-5 w-5" />,
    },
    {
      label: 'Competitors',
      href: '/competitors',
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      label: 'Reviews',
      href: '/reviews',
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      label: 'App Profile',
      href: '/app-profile',
      icon: <Star className="h-5 w-5" />,
    },
    {
      label: 'Users',
      href: '/users',
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: 'Settings',
      href: '/settings',
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <div className="flex h-screen w-64 flex-col border-r border-border bg-card">
      <div className="flex h-16 items-center px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center space-x-1">
            <div className="h-8 w-8 bg-redbox-red rounded"></div>
            <div className="h-8 w-8 bg-redbox-purple rounded"></div>
          </div>
          <span className="text-xl font-slab font-bold text-redbox-indigo">Redbox ASO</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto py-6 px-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "bg-redbox-purple text-white"
                    : "text-redbox-indigo hover:bg-redbox-light-grey"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-md bg-redbox-light-grey/50 p-3">
          <div className="h-8 w-8 rounded-full bg-redbox-indigo flex items-center justify-center text-white font-medium">
            RB
          </div>
          <div>
            <div className="text-sm font-medium">Redbox Team</div>
            <div className="text-xs text-muted-foreground">Premium Plan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
