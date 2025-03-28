import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  BarChart3, 
  Search, 
  TrendingUp, 
  MessageSquare, 
  Home, 
  Star,
  DollarSign
} from 'lucide-react';

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const Sidebar = () => {
  const location = useLocation();
  
  // SuperOne app icon URL from App Profile
  const appIconUrl = "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7c/6a/f4/7c6af427-7e3a-623b-0d07-94149ea183da/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/1024x1024bb.jpg";
  
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
      label: 'Revenue',
      href: '/revenue',
      icon: <DollarSign className="h-5 w-5" />,
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
  ];

  return (
    <div className="flex h-screen w-64 flex-col border-r border-border bg-card">
      <div className="flex h-16 items-center px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            {/* SuperOne App Icon */}
            <img 
              src={appIconUrl} 
              alt="SuperOne Fan Battle" 
              className="h-10 w-10 rounded-lg" 
            />
          </div>
          <span className="text-xl font-slab font-bold text-redbox-indigo">ASO Dashboard</span>
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
    </div>
  );
};

export default Sidebar;
