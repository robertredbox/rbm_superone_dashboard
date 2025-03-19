
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <div className="text-center max-w-md animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="h-24 w-24 bg-redbox-red/10 rounded-full flex items-center justify-center">
              <div className="h-16 w-16 bg-redbox-red/20 rounded-full flex items-center justify-center">
                <div className="h-8 w-8 bg-redbox-red rounded-full"></div>
              </div>
            </div>
            <div className="absolute -top-2 -right-2">
              <div className="h-12 w-12 bg-redbox-purple/10 rounded-full flex items-center justify-center">
                <div className="h-8 w-8 bg-redbox-purple/20 rounded-full flex items-center justify-center">
                  <div className="h-4 w-4 bg-redbox-purple rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-slab font-bold mb-4 text-redbox-indigo">404</h1>
        <p className="text-xl font-medium mb-2">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          We couldn't find the page you were looking for. It might have been moved or deleted.
        </p>
        <Button asChild className="bg-redbox-purple hover:bg-redbox-purple/90 transition-colors">
          <a href="/" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
