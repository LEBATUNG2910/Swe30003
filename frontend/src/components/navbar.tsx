import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Heart, ShoppingCart, Search, User } from "lucide-react";
import logo from "@/assets/logo.jpg"; 

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full p-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2 ml-8">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <img src={logo} alt="logo" />
            </div>
            <span className="font-bold text-xl text-blue-600">Long Chau</span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="flex space-x-6">
          <Link to="/products" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Products
          </Link>
          <Link to="/prescription" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Prescription
          </Link>
          <Link to="/branches" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Stores
          </Link>
        </nav>

        {/* Right: Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative w-[300px] mr-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search medicines, supplements..."
              className="pl-10 pr-4 border border-gray-300 hover:border-black focus:border-black focus:ring-0"
            />
          </div>

          {/* Icons */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              3
            </Badge>
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Link to="/products">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                2
              </Badge>
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
